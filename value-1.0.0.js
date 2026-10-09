import {
  renderBuildSummary,
  listCharacters,
  moods,
  listThemes,
} from "./dist/browser-1.0.0.js";
import {
  diagnoseError,
  renderDiagnosis,
} from "./vendor/v1/error-translator/index.js";
import { incidentUpdate } from "./vendor/v1/excuse-js/index.js";
import { createDogLogger } from "./vendor/v1/doggo-log/index.js";
import { evaluateReports } from "./vendor/v1/ship-it-meter/index.js";
const el = (id) => document.getElementById(id),
  quote = (s) => "'" + String(s).replaceAll("'", "'\\''") + "'";
const control = (id, label, value, choices) => {
  const wrap = document.createElement("label");
  wrap.textContent = label;
  const input = document.createElement(
    choices ? "select" : typeof value === "boolean" ? "input" : "textarea",
  );
  input.id = id;
  if (choices)
    for (const v of choices) {
      const o = document.createElement("option");
      o.value = o.textContent = v;
      o.selected = v === value;
      input.append(o);
    }
  else if (typeof value === "boolean") {
    input.type = "checkbox";
    input.checked = value;
  } else {
    input.rows = String(value).includes("\n") ? 6 : 2;
    input.value = value;
  }
  wrap.append(input);
  return wrap;
};
const val = (id) => el(id).value,
  json = (id) => JSON.parse(val(id));
function panel(anchor, id, title, description, fields, run) {
  const details = document.createElement("details");
  details.open = true;
  details.className = "value-demo";
  const summary = document.createElement("summary");
  summary.textContent = title;
  const intro = document.createElement("p");
  intro.textContent = description;
  const form = document.createElement("form");
  form.className = "demo-controls";
  form.append(...fields);
  const output = document.createElement("pre");
  output.id = id + "-output";
  output.className = "terminal";
  output.setAttribute("aria-live", "polite");
  const caption = document.createElement("p"),
    code = document.createElement("pre");
  code.className = "command";
  code.id = id + "-command";
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Run example";
  const copy = document.createElement("button");
  copy.type = "button";
  copy.textContent = "Copy example";
  const status = document.createElement("p");
  status.setAttribute("role", "status");
  const render = () => {
    try {
      const r = run();
      output.textContent = r.output;
      code.textContent = r.command;
      caption.textContent =
        r.caption ?? "Try the same input in your terminal (sh/bash):";
      copy.disabled = false;
      status.textContent = "";
    } catch (e) {
      output.textContent = "Input needs attention: " + e.message;
      code.textContent = "";
      copy.disabled = true;
    }
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    render();
  });
  form.addEventListener("input", render);
  button.addEventListener("click", render);
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = "Example copied.";
    } catch {
      status.textContent = "Select and copy the example manually.";
    }
  });
  details.append(
    summary,
    intro,
    form,
    button,
    output,
    caption,
    code,
    copy,
    status,
  );
  const section = el(anchor).closest("section");
  section.querySelector("h2").nextElementSibling.after(details);
  render();
}
const pretty = (v) => JSON.stringify(v, null, 2),
  pipe = (pkg, flags, data) =>
    `printf '%s' ${quote(data)} | npx @deployanyway/${pkg}@1.0.0 ${flags}`;
panel(
  "output",
  "build",
  "Build Buddy: actual facts, original characters",
  "Summarize your measured build and test results. Missing build status stays unknown. This renders facts; your script must preserve the underlying command exit code.",
  [
    control(
      "build-facts",
      "Measured facts (JSON)",
      pretty({
        label: "Release build",
        exitCode: 0,
        tests: { passed: 42, failed: 0, skipped: 2 },
        durationMs: 1520,
        commit: "demo-commit",
      }),
    ),
    control("build-format", "Summary output", "character", [
      "character",
      "plain",
      "JSON",
    ]),
    control("build-character", "Character", "husky", listCharacters()),
    control("build-mood", "Mood", "benji", moods()),
    control("build-theme", "Theme", "classic", listThemes()),
    control("build-mode", "Say or think", "say", ["say", "think"]),
    control("build-width", "Wrap width", "52"),
  ],
  () => {
    const format = val("build-format"),
      r = renderBuildSummary(json("build-facts"), {
        format: format === "plain" ? "plain" : "character",
        character: val("build-character"),
        mood: val("build-mood"),
        theme: val("build-theme"),
        mode: val("build-mode"),
        width: Number(val("build-width")),
      });
    return {
      output: format === "JSON" ? pretty(r) : r.rendered,
      command: pipe(
        "bro-say",
        "--summary" +
          (format === "plain"
            ? " --plain"
            : ` --character ${val("build-character")} --mood ${val("build-mood")} --theme ${val("build-theme")} --width ${val("build-width")}`) +
          (val("build-mode") === "think" && format !== "plain"
            ? " --think"
            : "") +
          (format === "JSON" ? " --json" : ""),
        val("build-facts"),
      ),
    };
  },
);
panel(
  "translate",
  "diagnosis",
  "Follow the cause, not just the error code",
  "Paste an Error-shaped JSON object with nested cause fields. Bounded traversal handles cycles in the API; stacks are opt-in. The Node API also preserves your original Error by reference.",
  [
    control(
      "diagnosis-facts",
      "Error and cause (JSON)",
      pretty({
        name: "Error",
        message: "Configuration could not load",
        cause: {
          name: "Error",
          code: "ENOENT",
          message: "Missing config.json",
        },
      }),
    ),
    control("diagnosis-mode", "Explanation style", "plain", [
      "plain",
      "rubber-duck",
    ]),
    control("diagnosis-depth", "Maximum depth (1–32)", "8"),
    control("diagnosis-stack", "Include supplied stack", false),
    control("diagnosis-format", "Output", "readable", ["readable", "JSON"]),
  ],
  () => {
    const options = {
        mode: val("diagnosis-mode"),
        maxDepth: Number(val("diagnosis-depth")),
        includeStack: el("diagnosis-stack").checked,
      },
      r = diagnoseError(json("diagnosis-facts"), options);
    return {
      output:
        val("diagnosis-format") === "JSON" ? pretty(r) : renderDiagnosis(r),
      command: pipe(
        "error-translator",
        `--diagnose --mode ${options.mode} --max-depth ${options.maxDepth}` +
          (options.includeStack ? " --include-stack" : "") +
          (val("diagnosis-format") === "JSON" ? " --json" : ""),
        val("diagnosis-facts"),
      ),
    };
  },
);
panel(
  "excuse-report",
  "incident",
  "Own It: accountable incident updates",
  "Draft from facts you provide. Missing facts remain visible; complete means fields supplied, not incident resolved. Public updates keep jokes off. Nothing is posted or sent.",
  [
    control(
      "incident-facts",
      "Known facts (JSON)",
      pretty({
        status: "identified",
        service: "API",
        impact: "Some requests return 503",
        action: "Rolling back the latest release",
        owner: "On-call developer",
        nextUpdate: new Date(Date.now() + 900000).toISOString(),
      }),
    ),
    control("incident-audience", "Audience", "public", ["public", "internal"]),
    control(
      "incident-humor",
      "Internal comic relief (requires internal audience)",
      false,
    ),
    control("incident-seed", "Humor seed", "dallas"),
    control("incident-format", "Output", "readable", ["readable", "JSON"]),
    control("incident-complete", "Require complete facts in CLI", true),
  ],
  () => {
    const options = {
        audience: val("incident-audience"),
        humor: el("incident-humor").checked,
        seed: val("incident-seed"),
      },
      r = incidentUpdate(json("incident-facts"), options);
    return {
      output: val("incident-format") === "JSON" ? pretty(r) : r.message,
      command: pipe(
        "excuse-js",
        `--incident --audience ${options.audience}` +
          (options.humor ? " --humor --seed " + quote(options.seed) : "") +
          (val("incident-format") === "JSON" ? " --json" : "") +
          (el("incident-complete").checked ? " --require-complete" : ""),
        val("incident-facts"),
      ),
    };
  },
);
panel(
  "log-context",
  "redaction",
  "Good dog. Guard the context.",
  "Try redaction before output reaches a writer. Credential context keys are protected by default; literal secrets require configuration. The Node-only request logger carries scope through async work. Browser output below demonstrates the shared formatting/redaction core, not AsyncLocalStorage.",
  [
    control(
      "redaction-context",
      "Request context (scalar JSON)",
      pretty({
        requestId: "dallas-1",
        authorization: "demo-secret",
        service: "API",
      }),
    ),
    control(
      "redaction-message",
      "Message",
      "Request finished with demo-secret",
    ),
    control(
      "redaction-values",
      "Exact secret values (JSON array)",
      '["demo-secret"]',
    ),
    control(
      "redaction-keys",
      "Custom protected keys (blank uses defaults)",
      "",
    ),
    control("redaction-replacement", "Replacement", "[REDACTED]"),
    control("redaction-format", "Output", "JSON", ["JSON", "text"]),
    control("redaction-method", "Method", "info", [
      "log",
      "debug",
      "info",
      "success",
      "warn",
      "error",
    ]),
  ],
  () => {
    const redact = {
      values: json("redaction-values"),
      replacement: val("redaction-replacement"),
    };
    if (val("redaction-keys").trim())
      redact.keys = val("redaction-keys")
        .split(",")
        .map((s) => s.trim());
    const config = {
        json: val("redaction-format") === "JSON",
        redact,
        bark: true,
        barkMode: "rotate",
        seed: "dallas",
      },
      context = json("redaction-context"),
      method = val("redaction-method"),
      message = val("redaction-message");
    const line = createDogLogger({ ...config, context, write: () => {} })[
      method
    ](message);
    return {
      output: config.json ? pretty(JSON.parse(line)) : line,
      caption:
        "Node 22.13+/24: install @deployanyway/doggo-log@1.0.0, save as demo.mjs, run node demo.mjs. This example runs the actual asynchronous scope API:",
      command: `import { createRequestLogger } from '@deployanyway/doggo-log/context';\nconst log = createRequestLogger(${pretty(config)});\ntry {\n  await log.run(${pretty(context)}, async () => {\n    await new Promise(resolve => setTimeout(resolve, 10));\n    log.${method}(${JSON.stringify(message)});\n  });\n} finally { log.dispose(); }`,
    };
  },
);
const stamp = new Date().toISOString(),
  commit = "demo-commit";
const cov = {
  total: Object.fromEntries(
    ["lines", "statements", "functions", "branches"].map((k) => [
      k,
      { total: 10, covered: 10, pct: 100 },
    ]),
  ),
};
const tap =
  "TAP version 13\n1..1\n# tests 1\n# pass 1\n# fail 0\n# cancelled 0\n# skipped 0\n# todo 0\n";
panel(
  "gate",
  "receipts",
  "Bring receipts: a report-backed release policy",
  "Demonstration reports are editable sample data, not evidence about this site. In CI, collect real completed reports for the exact commit. Receipt metadata is a pipeline claim, not a signature; do not trust unverified submitted artifacts.",
  [
    control("receipt-commit", "Expected commit", commit),
    control("receipt-source-commit", "Report commit", commit),
    control("receipt-time", "Report capture time (UTC ISO)", stamp),
    control("receipt-format", "Test report format", "node-tap", [
      "node-tap",
      "jest",
    ]),
    control(
      "receipt-tests",
      "Completed test report (Node TAP or Jest JSON)",
      tap,
    ),
    control(
      "receipt-coverage",
      "Istanbul / c8 coverage-summary.json",
      pretty(cov),
    ),
    control("receipt-build", "Measured build exit code", "0"),
    control(
      "receipt-policy",
      "Policy (JSON)",
      pretty({ minTests: 1, minCoverage: 80, minScore: 80, maxAgeMs: 3600000 }),
    ),
    control("receipt-output", "Output", "readable", ["readable", "JSON"]),
  ],
  () => {
    const meta = {
        commit: val("receipt-source-commit"),
        capturedAt: val("receipt-time"),
      },
      bundle = {
        commit: val("receipt-commit"),
        tests: {
          ...meta,
          format: val("receipt-format"),
          data: val("receipt-tests"),
        },
        coverage: {
          ...meta,
          format: "istanbul-summary",
          data: json("receipt-coverage"),
        },
        build: { ...meta, exitCode: Number(val("receipt-build")) },
      },
      policy = json("receipt-policy"),
      r = evaluateReports(bundle, policy);
    return {
      output:
        val("receipt-output") === "JSON"
          ? pretty(r)
          : [
              r.summary,
              `Gate: ${r.passed ? "PASS" : "BLOCKED"}`,
              `Score: ${r.score}/100`,
              ...r.receipts.map(
                (x) =>
                  `${x.kind}: ${x.accepted ? "accepted" : x.issues.join("; ")}`,
              ),
              ...r.blockers,
            ].join("\n"),
      command: pipe(
        "ship-it-meter",
        "--reports --policy " +
          quote(JSON.stringify(policy)) +
          (val("receipt-output") === "JSON" ? " --json" : ""),
        JSON.stringify(bundle),
      ),
    };
  },
);

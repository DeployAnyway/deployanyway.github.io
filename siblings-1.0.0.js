import {
  errorCatalog,
  listErrors,
  translateError,
  translateErrors,
  renderTranslation,
} from "./vendor/error-translator/index.js";
import {
  listExcuses,
  categories,
  excuse,
  excuseBatch,
  excuseReport,
} from "./vendor/excuse-js/index.js";
import { barkLines, createDogLogger } from "./vendor/doggo-log/index.js";
import {
  releasePlan,
  releaseScenarios,
  scenarioEvidence,
  releaseGate,
  preflight,
  shipIt,
} from "./vendor/ship-it-meter/index.js";
const el = (id) => document.getElementById(id);
const q = (value) => "'" + String(value).replaceAll("'", "'\\''") + "'";
const select = (id, label, values, selected) => {
  const wrap = document.createElement("label");
  wrap.textContent = label;
  const input = document.createElement("select");
  input.id = id;
  for (const value of values) {
    const option = document.createElement("option");
    option.value = option.textContent = value;
    option.selected = value === selected;
    input.append(option);
  }
  wrap.append(input);
  return wrap;
};
const field = (id, label, value, type = "text") => {
  const wrap = document.createElement("label");
  wrap.textContent = label;
  const input = document.createElement("input");
  input.id = id;
  input.type = type;
  input.value = value;
  if (type === "number") input.min = "0";
  wrap.append(input);
  return wrap;
};
const check = (id, label, value = true) => {
  const wrap = field(id, label, "", "checkbox");
  wrap.firstElementChild.checked = value;
  return wrap;
};
function setup(section, button, output, fields, run) {
  const form = document.createElement("form");
  form.className = "demo-controls";
  form.append(...fields);
  el(button).before(form);
  form.addEventListener("submit", (event) => event.preventDefault());
  const caption = document.createElement("p");
  caption.textContent = "Try it in your terminal (sh/bash):";
  const command = document.createElement("pre");
  command.className = "command";
  command.setAttribute("aria-label", `${section} command`);
  const copy = document.createElement("button");
  copy.type = "button";
  copy.textContent = "Copy command";
  const status = document.createElement("p");
  status.setAttribute("role", "status");
  el(output).after(caption, command, copy, status);
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(command.textContent);
      status.textContent = "Command copied.";
    } catch {
      status.textContent = "Select and copy the command manually.";
    }
  });
  const render = () => {
    try {
      const result = run();
      caption.textContent =
        result.caption || "Try it in your terminal (sh/bash):";
      copy.textContent = result.caption ? "Copy example" : "Copy command";
      el(output).textContent = result.output;
      command.textContent = result.command;
      copy.disabled = false;
      status.textContent = "";
    } catch (error) {
      el(output).textContent = "Input needs attention: " + error.message;
      command.textContent = "";
      copy.disabled = true;
    }
  };
  el(button).addEventListener("click", render);
  form.addEventListener("input", render);
  render();
}
// Catalogs are read from the actual package, so the choices match its capabilities.
setup(
  "error-translator",
  "translate",
  "translations",
  [
    select(
      "error-code",
      "Supported code / custom input",
      [...listErrors(), "Custom message", "JSON batch", "Full catalog"],
      "ENOENT",
    ),
    select(
      "error-mode",
      "Explanation style",
      ["plain", "rubber-duck"],
      "rubber-duck",
    ),
    select("error-format", "Output format", ["readable", "JSON"], "readable"),
  ],
  () => {
    const code = el("error-code").value,
      batch = code === "JSON batch";
    el("errors").parentElement.hidden = ![
      "Custom message",
      "JSON batch",
    ].includes(code);
    el("errors").disabled = !["Custom message", "JSON batch"].includes(code);
    el("errors").parentElement.firstChild.textContent = batch
      ? "Error batch (JSON array)"
      : "Custom error message";
    const input = batch
      ? JSON.parse(el("errors").value)
      : code === "Custom message"
        ? el("errors").value
        : code;
    const options = { mode: el("error-mode").value };
    const catalog = code === "Full catalog";
    const result = catalog
      ? errorCatalog(options)
      : batch
        ? translateErrors(input, options)
        : translateError(input, options);
    return {
      output:
        el("error-format").value === "JSON"
          ? JSON.stringify(result, null, 2)
          : batch || catalog
            ? result.map(renderTranslation).join("\n\n---\n\n")
            : renderTranslation(result),
      command:
        (batch ? `printf '%s' ${q(el("errors").value)} | ` : "") +
        `npx @deployanyway/error-translator@1.0.0 ${catalog ? "--catalog" : batch ? "--batch" : q(input)} --mode ${options.mode}` +
        (el("error-format").value === "JSON" ? " --json" : ""),
    };
  },
);
for (const category of categories()) {
  const option = document.createElement("option");
  option.value = option.textContent = category;
  el("excuse-category").append(option);
}
setup(
  "excuse-js",
  "excuse-report",
  "excuse-output",
  [
    select(
      "excuse-mode",
      "Generate",
      ["report", "single", "batch", "catalog"],
      "report",
    ),
    field("excuse-seed", "Seed (blank = random)", "demo"),
    field("excuse-count", "Batch count (1–20)", "3", "number"),
    select("excuse-format", "Output format", ["readable", "JSON"], "readable"),
  ],
  () => {
    const category = el("excuse-category").value,
      mode = el("excuse-mode").value,
      seed = el("excuse-seed").value,
      options = seed ? { seed } : {};
    el("excuse-count").disabled = mode !== "batch";
    el("excuse-seed").disabled = mode === "catalog";
    const result =
      mode === "catalog"
        ? listExcuses(category)
        : mode === "report"
          ? excuseReport(category, options)
          : mode === "batch"
            ? excuseBatch(category, {
                ...options,
                count: Number(el("excuse-count").value),
              })
            : excuse(category, options);
    return {
      output:
        el("excuse-format").value === "JSON"
          ? JSON.stringify(result, null, 2)
          : mode === "report"
            ? result.excuse + "\n\nNext step: " + result.nextStep
            : Array.isArray(result)
              ? result.map((item, i) => `${i + 1}. ${item}`).join("\n")
              : result,
      command:
        `npx @deployanyway/excuse-js@1.0.0 ${category}` +
        (seed && mode !== "catalog" ? ` --seed ${q(seed)}` : "") +
        (mode === "catalog"
          ? " --catalog"
          : mode === "report"
            ? " --report"
            : mode === "batch"
              ? ` --count ${el("excuse-count").value}`
              : "") +
        (el("excuse-format").value === "JSON" ? " --json" : ""),
    };
  },
);
el("excuse-category").addEventListener("change", () =>
  el("excuse-report").click(),
);
setup(
  "doggo-log",
  "log-context",
  "log-output",
  [
    select(
      "dog-demo",
      "Demonstration",
      ["one log", "eight-log sequence", "commentary catalog"],
      "one log",
    ),
    select("dog-bark-mode", "Commentary mode", ["classic", "rotate"], "rotate"),
    field("dog-seed", "Commentary seed", "dallas"),
    field("dog-message", "Message", "Evidence fetched. Good dog."),
    select(
      "dog-method",
      "Log method",
      ["log", "debug", "info", "success", "warn", "error"],
      "info",
    ),
    select(
      "dog-level",
      "Minimum level",
      ["debug", "log", "info", "success", "warn", "error"],
      "debug",
    ),
    field("dog-prefix", "Prefix", "api"),
    field(
      "dog-context",
      "Additional context (JSON scalar fields)",
      '{"environment":"demo"}',
    ),
    select("dog-format", "Output format", ["JSON", "text"], "JSON"),
    check("dog-bark", "Dog commentary"),
    check("dog-emoji", "Emoji"),
    check("dog-time", "Timestamp", false),
    check("dog-quiet", "Quiet (suppress output)", false),
  ],
  () => {
    const rawContext = JSON.parse(el("dog-context").value);
    if (
      !rawContext ||
      typeof rawContext !== "object" ||
      Array.isArray(rawContext)
    )
      throw new TypeError("Context must be a JSON object of scalar fields.");
    const context = { ...rawContext, requestId: el("request-id").value };
    const config = {
      context,
      prefix: el("dog-prefix").value,
      level: el("dog-level").value,
      json: el("dog-format").value === "JSON",
      bark: el("dog-bark").checked,
      barkMode: el("dog-bark-mode").value,
      seed: el("dog-seed").value,
      emoji: el("dog-emoji").checked,
      timestamp: el("dog-time").checked,
      quiet: el("dog-quiet").checked,
      write: () => {},
    };
    const method = el("dog-method").value,
      demo = el("dog-demo").value;
    if (demo === "commentary catalog")
      return {
        output: barkLines(method)
          .map((line, i) => i + 1 + ". " + line)
          .join("\n"),
        caption:
          "Install @deployanyway/doggo-log@1.0.0; save as demo.mjs and run node demo.mjs:",
        command:
          "import { barkLines } from '@deployanyway/doggo-log';\nconsole.log(barkLines(" +
          JSON.stringify(method) +
          ").join('\\n'));",
      };
    const logger = createDogLogger(config);
    if (demo === "eight-log sequence") {
      const results = Array.from({ length: 8 }, () =>
        logger[method](el("dog-message").value),
      );
      const codeConfig = { ...config };
      delete codeConfig.write;
      return {
        output:
          results.filter((value) => value !== undefined).join("\n") ||
          "No logs emitted: quiet mode or minimum level filtered these messages.",
        caption:
          "Install @deployanyway/doggo-log@1.0.0; save as demo.mjs and run node demo.mjs:",
        command:
          "import { createDogLogger } from '@deployanyway/doggo-log';\nconst log = createDogLogger(" +
          JSON.stringify(codeConfig, null, 2) +
          ");\nfor (let i = 0; i < 8; i++) log." +
          method +
          "(" +
          JSON.stringify(el("dog-message").value) +
          ");",
      };
    }
    const result = logger[method](el("dog-message").value);
    return {
      output:
        result === undefined
          ? "No log emitted: quiet mode or the minimum level filtered this message."
          : config.json
            ? JSON.stringify(JSON.parse(result), null, 2)
            : result,
      command:
        `npx @deployanyway/doggo-log@1.0.0 ${el("dog-method").value} ${q(el("dog-message").value)} --level ${config.level} --prefix ${q(config.prefix)} --context ${q(JSON.stringify(context))}` +
        (config.json ? " --json" : "") +
        (config.bark ? " --bark" : "") +
        ` --bark-mode ${config.barkMode} --seed ${q(config.seed)}` +
        (!config.emoji ? " --no-emoji" : "") +
        (config.timestamp ? " --timestamp" : "") +
        (config.quiet ? " --quiet" : ""),
    };
  },
);
el("request-id").addEventListener("input", () => el("log-context").click());
const scenarioWrap = select(
  "ship-scenario",
  "Example evidence scenario",
  releaseScenarios().map((item) => item.name),
  "ready",
);
const scenarioButton = document.createElement("button");
scenarioButton.type = "button";
scenarioButton.textContent = "Load scenario";
const scenarioDescription = document.createElement("p");
scenarioDescription.setAttribute("role", "status");
el("evidence").parentElement.before(
  scenarioWrap,
  scenarioButton,
  scenarioDescription,
);
scenarioWrap.addEventListener("change", () => {
  scenarioDescription.textContent = releaseScenarios().find(
    (item) => item.name === el("ship-scenario").value,
  ).description;
});
scenarioButton.addEventListener("click", () => {
  const data = scenarioEvidence(el("ship-scenario").value);
  el("evidence").value = JSON.stringify(data, null, 2);
  for (const [id, key] of [
    ["ship-tests", "tests"],
    ["ship-failing", "failingTests"],
    ["ship-coverage", "coverage"],
    ["ship-critical", "criticalIssues"],
    ["ship-lint", "lintFailures"],
    ["ship-branch", "branch"],
  ])
    el(id).value = data[key] ?? "";
  el("ship-build").value =
    data.build === undefined ? "not provided" : data.build ? "pass" : "fail";
  el("ship-day").value = data.day ?? "monday";
  el("ship-dirty").checked = data.uncommittedChanges ?? false;
  scenarioDescription.textContent = releaseScenarios().find(
    (item) => item.name === el("ship-scenario").value,
  ).description;
  el("gate").click();
});
const evidenceForm = document.createElement("form");
evidenceForm.className = "demo-controls";
const evidenceFields = [
  field("ship-tests", "Total tests", "42", "number"),
  field("ship-failing", "Failing tests", "0", "number"),
  field("ship-coverage", "Coverage %", "92", "number"),
  select("ship-build", "Build", ["pass", "fail", "not provided"], "pass"),
  field("ship-critical", "Critical issues", "0", "number"),
  field("ship-lint", "Lint failures", "0", "number"),
  field("ship-branch", "Branch", "main"),
  select(
    "ship-day",
    "Weekday",
    [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
    "monday",
  ),
  check("ship-dirty", "Uncommitted changes", false),
];
evidenceForm.append(...evidenceFields);
el("evidence").parentElement.before(evidenceForm);
evidenceForm.addEventListener("submit", (event) => event.preventDefault());
evidenceForm.addEventListener("input", () => {
  const data = {
    tests: Number(el("ship-tests").value),
    failingTests: Number(el("ship-failing").value),
    coverage: Number(el("ship-coverage").value),
    criticalIssues: Number(el("ship-critical").value),
    lintFailures: Number(el("ship-lint").value),
    branch: el("ship-branch").value,
    day: el("ship-day").value,
    uncommittedChanges: el("ship-dirty").checked,
  };
  for (const [id, key] of [
    ["ship-tests", "tests"],
    ["ship-failing", "failingTests"],
    ["ship-coverage", "coverage"],
    ["ship-critical", "criticalIssues"],
    ["ship-lint", "lintFailures"],
    ["ship-branch", "branch"],
  ]) {
    if (el(id).value === "") delete data[key];
  }
  if (el("ship-build").value !== "not provided")
    data.build = el("ship-build").value === "pass";
  el("evidence").value = JSON.stringify(data, null, 2);
  el("gate").click();
});
setup(
  "ship-it-meter",
  "gate",
  "gate-output",
  [
    select(
      "ship-mode",
      "Evaluation",
      ["release plan", "release gate", "preflight checklist", "score"],
      "release plan",
    ),
    field("ship-min", "Gate minimum score (0–100)", "80", "number"),
    select("ship-format", "Output format", ["readable", "JSON"], "readable"),
  ],
  () => {
    const input = JSON.parse(el("evidence").value),
      mode = el("ship-mode").value;
    el("ship-min").disabled = !["release gate", "release plan"].includes(mode);
    const result =
      mode === "release plan"
        ? releasePlan(input, { minScore: Number(el("ship-min").value) })
        : mode === "release gate"
          ? releaseGate(input, { minScore: Number(el("ship-min").value) })
          : mode === "preflight checklist"
            ? preflight(input)
            : shipIt(input);
    const text = [
      result.summary,
      `Score: ${result.score}/100 — ${result.verdict}`,
      result.passed === undefined
        ? ""
        : `Gate: ${result.passed ? "PASS" : "BLOCKED"}`,
      ...(result.tasks
        ? [
            "\nRELEASE TASKS",
            ...result.tasks.map(
              (task) =>
                `[${task.priority}] ${task.title}\nVerify: ${task.verify}`,
            ),
          ]
        : []),
      ...["reasons", "blockers", "actions"]
        .filter((key) => result[key]?.length)
        .map(
          (key) =>
            `\n${key.toUpperCase()}\n` +
            result[key].map((item) => "- " + item).join("\n"),
        ),
    ]
      .filter(Boolean)
      .join("\n");
    return {
      output:
        el("ship-format").value === "JSON"
          ? JSON.stringify(result, null, 2)
          : text,
      command:
        `printf '%s' ${q(el("evidence").value)} | npx @deployanyway/ship-it-meter@1.0.0 --stdin` +
        (mode === "release plan"
          ? ` --plan --min-score ${el("ship-min").value}`
          : mode === "release gate"
            ? ` --gate --min-score ${el("ship-min").value}`
            : mode === "preflight checklist"
              ? " --checklist"
              : "") +
        (el("ship-format").value === "JSON" ? " --json" : ""),
    };
  },
);
el("evidence").addEventListener("input", () => el("gate").click());

// Raw evidence stays editable for missing fields and API validation examples.
el("evidence").parentElement.firstChild.textContent =
  "Evidence JSON (generated by controls; also directly editable)";

el("errors").addEventListener("input", () => el("translate").click());

import {
  translateError,
  renderTranslation,
} from "./vendor/error-translator/index.js";
import { excuseBatch, categories } from "./vendor/excuse-js/index.js";
import { createDogLogger } from "./vendor/doggo-log/index.js";
import { preflight } from "./vendor/ship-it-meter/index.js";
import { brosay, moods } from "./vendor/bro-say/index.js";

const tools = [
  {
    id: "error-translator",
    short: "The stack trace interpreter",
    category: "01 / DEBUGGING, WITH A DUCK",
    description:
      "Plain-English explanations, real debugging steps, and a rubber duck with opinions.",
    fields: [
      {
        key: "message",
        label: "Error code or message",
        value: "ECONNREFUSED",
        wide: true,
      },
      {
        key: "mode",
        label: "Translation mode",
        choices: ["rubber-duck", "plain"],
      },
    ],
    run: (v) => renderTranslation(translateError(v.message, { mode: v.mode })),
    command: (v) =>
      `npx @deployanyway/error-translator ${quote(v.message)} --mode ${v.mode}`,
    caveat:
      "Explains likely causes; keep the original error and stack trace. No AI service involved.",
  },
  {
    id: "excuse-js",
    short: "Your meeting spokesperson",
    category: "02 / MEETING PREPARATION",
    description:
      "Prepare a repeatable batch of original excuses. Finally, a dependency that takes the blame.",
    fields: [
      {
        key: "category",
        label: "What needs an explanation?",
        choices: categories(),
      },
      { key: "seed", label: "Repeatable seed", value: "demo" },
      {
        key: "count",
        label: "Excuses to prepare",
        type: "number",
        value: 3,
        min: 1,
        max: 20,
      },
    ],
    run: (v) =>
      excuseBatch(v.category, { seed: v.seed, count: Number(v.count) })
        .map((line, i) => `${i + 1}. ${line}`)
        .join("\n"),
    command: (v) =>
      `npx @deployanyway/excuse-js ${v.category} --seed ${quote(v.seed)} --count ${v.count}`,
    caveat:
      "Seeded output is repeatable within this package version. Batches repeat after exhausting the category pool. These are jokes, not incident reports.",
  },
  {
    id: "doggo-log",
    short: "Good logs. Very good logs.",
    category: "03 / LOGGING, WITH A GOOD DOG",
    description:
      "Scoped messages, log levels, and optional dog commentary. The original message stays intact.",
    fields: [
      {
        key: "message",
        label: "Log message",
        value: "Migration complete",
        wide: true,
      },
      {
        key: "method",
        label: "Log level",
        choices: ["success", "info", "warn", "error", "debug"],
      },
      { key: "prefix", label: "Scope", value: "database" },
      { key: "format", label: "Output style", choices: ["text", "json"] },
    ],
    run: (v) => {
      let output = "";
      const log = createDogLogger({
        bark: true,
        level: "debug",
        prefix: v.prefix,
        json: v.format === "json",
        write: (line) => {
          output = line;
        },
      });
      log[v.method](v.message);
      return output;
    },
    command: (v) =>
      `npx @deployanyway/doggo-log ${v.method} ${quote(v.message)} --bark --prefix ${quote(v.prefix)}${v.format === "json" ? " --json" : ""}`,
    caveat:
      "Browser demo captures a single string instead of writing to Node console streams. Use child loggers in your app to create nested scopes.",
  },
  {
    id: "ship-it-meter",
    short: "Evidence before confidence",
    category: "04 / DEPLOYMENT PREFLIGHT",
    description:
      "Score the evidence and get a mildly concerned checklist. Vibes are not assertions.",
    fields: [
      {
        key: "tests",
        label: "Total tests",
        type: "number",
        value: 125,
        min: 0,
        max: 100000,
      },
      {
        key: "failing",
        label: "Failing tests",
        type: "number",
        value: 0,
        min: 0,
        max: 100000,
      },
      {
        key: "coverage",
        label: "Coverage (%)",
        type: "number",
        value: 82,
        min: 0,
        max: 100,
        step: "any",
      },
      { key: "build", label: "Build result", choices: ["pass", "fail"] },
      {
        key: "day",
        label: "Deployment day",
        choices: [
          "friday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "saturday",
          "sunday",
        ],
      },
    ],
    run: (v) => {
      const r = preflight({
        tests: Number(v.tests),
        failingTests: Number(v.failing),
        coverage: Number(v.coverage),
        build: v.build === "pass",
        day: v.day,
      });
      return `${r.score}/100 — ${r.verdict}\n\n${r.reasons.map((x) => "- " + x).join("\n")}\n\nBefore you ship:\n${r.actions.map((x) => "[ ] " + x).join("\n")}`;
    },
    command: (v) =>
      `npx @deployanyway/ship-it-meter --tests ${v.tests} --failing ${v.failing} --coverage ${v.coverage} --build ${v.build} --day ${v.day} --checklist`,
    caveat:
      "Illustrative heuristic using only your supplied evidence. It does not inspect CI or guarantee a safe deployment.",
  },
  {
    id: "bro-say",
    short: "Your terminal hype person",
    category: "05 / ANNOUNCEMENTS WORTH FRAMING",
    description:
      "Six developer moods. One announcement. Now with an ASCII frame worthy of the occasion.",
    fields: [
      {
        key: "message",
        label: "Announcement",
        value: "Tests passed!\nShip carefully.",
        textarea: true,
        wide: true,
      },
      { key: "mood", label: "Mood", choices: moods() },
      { key: "box", label: "Presentation", choices: ["boxed", "plain"] },
    ],
    run: (v) => brosay(v.message, { mood: v.mood, box: v.box === "boxed" }),
    command: (v) =>
      `npx @deployanyway/bro-say ${quote(v.message)} --mood ${v.mood}${v.box === "boxed" ? " --box" : ""}`,
    caveat:
      "Box padding counts code points. Wide emoji and combining marks may not align in every terminal.",
  },
];
function quote(value) {
  return "'" + value.replaceAll("'", "'\\''") + "'";
}
let selected = 0;
const tabs = document.querySelector(".tool-tabs");
const form = document.querySelector("#demo-form");
const fields = document.querySelector("#fields");
const output = document.querySelector("#output");
const command = document.querySelector("#command");
tools.forEach((tool, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.id = "tab-" + tool.id;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-controls", "demo-panel");
  const title = document.createElement("strong");
  title.textContent = tool.id;
  const subtitle = document.createElement("span");
  subtitle.textContent = tool.short;
  button.append(title, subtitle);
  button.addEventListener("click", () => select(index));
  button.addEventListener("keydown", (event) => {
    const shifts = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (event.key in shifts)
      next = (index + shifts[event.key] + tools.length) % tools.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tools.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      select(next);
      tabs.children[next].focus();
    }
  });
  tabs.append(button);
});
function select(index) {
  selected = index;
  const tool = tools[index];
  [...tabs.children].forEach((b, i) => {
    b.setAttribute("aria-selected", String(i === index));
    b.tabIndex = i === index ? 0 : -1;
  });
  document
    .querySelector("#demo-panel")
    .setAttribute("aria-labelledby", "tab-" + tool.id);
  document.querySelector("#tool-category").textContent = tool.category;
  document.querySelector("#tool-title").textContent = tool.id;
  document.querySelector("#tool-description").textContent = tool.description;
  document.querySelector("#caveat").textContent = tool.caveat;
  document.querySelector("#npm-link").href =
    "https://www.npmjs.com/package/@deployanyway/" + tool.id;
  document.querySelector("#source-link").href =
    "https://github.com/DeployAnyway/" + tool.id;
  fields.replaceChildren();
  tool.fields.forEach((f) => {
    const label = document.createElement("label");
    label.className = "field" + (f.wide ? " wide" : "");
    label.textContent = f.label;
    const control = document.createElement(
      f.choices ? "select" : f.textarea ? "textarea" : "input",
    );
    control.name = f.key;
    control.id = tool.id + "-" + f.key;
    if (f.choices)
      f.choices.forEach((choice) => {
        const option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        control.append(option);
      });
    else {
      if (!f.textarea) control.type = f.type ?? "text";
      control.value = f.value;
      control.maxLength = 1000;
      if (f.min !== undefined) control.min = f.min;
      if (f.max !== undefined) control.max = f.max;
      if (f.step) control.step = f.step;
    }
    control.required = true;
    label.append(control);
    fields.append(label);
  });
  if (tool.id === "excuse-js") form.elements.category.value = "deployment";
  if (tool.id === "bro-say") {
    form.elements.mood.value = "hype";
    form.elements.box.value = "boxed";
  }
  document.querySelector("#copy-status").textContent = "";
  run();
}
function run() {
  const tool = tools[selected];
  const values = Object.fromEntries(new FormData(form));
  try {
    output.textContent = tool.run(values);
    command.textContent = tool.command(values);
    document.querySelector("#output-label").textContent = "OUTPUT / " + tool.id;
  } catch (error) {
    output.textContent = error.message;
    command.textContent = "Adjust the input and run again.";
    document.querySelector("#output-label").textContent =
      "INPUT NEEDS ATTENTION";
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  run();
});
document.querySelector("#copy").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  if (command.textContent.startsWith("Adjust")) {
    status.textContent = "Run with valid input first.";
    return;
  }
  try {
    await navigator.clipboard.writeText(command.textContent);
    status.textContent =
      "Copied. Requires Node 22+; commands use POSIX shell quoting.";
  } catch {
    status.textContent =
      "Clipboard unavailable. Select and copy the command above.";
  }
});
select(0);

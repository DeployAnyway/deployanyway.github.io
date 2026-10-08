import {
  translateErrors,
  renderTranslation,
} from "./vendor/error-translator/index.js";
import { categories, excuseReport } from "./vendor/excuse-js/index.js";
import { createDogLogger } from "./vendor/doggo-log/index.js";
import { releaseGate } from "./vendor/ship-it-meter/index.js";
const element = (id) => document.getElementById(id);
for (const category of categories()) {
  const option = document.createElement("option");
  option.value = option.textContent = category;
  element("excuse-category").append(option);
}
const action = (button, output, run) => {
  element(button).addEventListener("click", () => {
    try {
      element(output).textContent = run();
    } catch (error) {
      element(output).textContent = "Input needs attention: " + error.message;
    }
  });
};
action("translate", "translations", () =>
  translateErrors(JSON.parse(element("errors").value), { mode: "rubber-duck" })
    .map(renderTranslation)
    .join("\n\n---\n\n"),
);
action("excuse-report", "excuse-output", () => {
  const result = excuseReport(element("excuse-category").value, {
    seed: "demo",
  });
  return result.excuse + "\n\nNext step: " + result.nextStep;
});
action("log-context", "log-output", () =>
  createDogLogger({
    json: true,
    bark: true,
    context: { requestId: element("request-id").value },
    write: () => {},
  }).info("Evidence fetched. Good dog."),
);
action("gate", "gate-output", () =>
  JSON.stringify(releaseGate(JSON.parse(element("evidence").value)), null, 2),
);

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  renderBro,
  listCharacters,
  moods,
  messageCategories,
  messagePresets,
} from "../dist/browser.js";
import {
  translateErrors,
  errorCatalog,
} from "../vendor/error-translator/index.js";
import {
  excuseReport,
  categories,
  listExcuses,
} from "../vendor/excuse-js/index.js";
import { createDogLogger, barkLines } from "../vendor/doggo-log/index.js";
import {
  releaseGate,
  releasePlan,
  releaseScenarios,
  scenarioEvidence,
} from "../vendor/ship-it-meter/index.js";
test("released demo uses actual flagship and sibling APIs", () => {
  assert.equal(listCharacters().length, 13);
  assert.equal(moods().length, 20);
  assert.match(
    renderBro({ text: "Hello 👋", mode: "think" }).rendered,
    /   o\n/,
  );
  assert.equal(translateErrors(["ENOENT", "ECONNREFUSED"]).length, 2);
  assert.match(
    excuseReport("testing", { seed: "demo" }).nextStep,
    /regression/,
  );
  const log = createDogLogger({
    json: true,
    context: { requestId: "abc" },
    write: () => {},
  });
  assert.equal(JSON.parse(log.info("x")).context.requestId, "abc");
  assert.equal(
    releaseGate({ tests: 42, build: true, coverage: 92 }).passed,
    true,
  );
});
test("vendored released catalogs and plans expose the expanded libraries", () => {
  assert.equal(messageCategories().flatMap(messagePresets).length, 48);
  assert.equal(errorCatalog().length, 46);
  assert.equal(categories().flatMap(listExcuses).length, 132);
  assert.equal(
    ["log", "debug", "info", "success", "warn", "error"].flatMap(barkLines)
      .length,
    48,
  );
  const log = createDogLogger({
    json: true,
    bark: true,
    barkMode: "rotate",
    seed: "demo",
    write: () => {},
  });
  assert.equal(
    new Set(
      Array.from(
        { length: 8 },
        () => JSON.parse(log.info("Same message")).commentary,
      ),
    ).size,
    8,
  );
  assert.equal(releaseScenarios().length, 12);
  const plan = releasePlan(scenarioEvidence("failed-build"));
  assert.equal(plan.passed, false);
  assert.equal(plan.tasks[0].priority, "blocker");
  assert.ok(plan.tasks.every((task) => task.verify));
});
test("released presentation is honest and renders input as text", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /AVAILABLE ON NPM/);
  assert.match(html, /aria-live="polite"/);
  for (const file of ["app-0.4.0.js", "siblings-0.4.0.js"])
    assert.doesNotMatch(
      readFileSync(new URL("../" + file, import.meta.url), "utf8"),
      /\.innerHTML\s*=/,
    );
});

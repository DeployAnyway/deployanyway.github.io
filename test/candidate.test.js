import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { renderBro, listCharacters, moods } from "../dist/browser.js";
import { translateErrors } from "../vendor/error-translator/index.js";
import { excuseReport } from "../vendor/excuse-js/index.js";
import { createDogLogger } from "../vendor/doggo-log/index.js";
import { releaseGate } from "../vendor/ship-it-meter/index.js";
test("candidate demo uses actual flagship and sibling APIs", () => {
  assert.equal(listCharacters().length, 13);
  assert.equal(moods().length, 12);
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
test("candidate presentation is honest and renders input as text", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /AVAILABLE ON NPM/);
  assert.match(html, /aria-live="polite"/);
  for (const file of ["app-0.3.0.js", "siblings-0.3.0.js"])
    assert.doesNotMatch(
      readFileSync(new URL("../" + file, import.meta.url), "utf8"),
      /\.innerHTML\s*=/,
    );
});

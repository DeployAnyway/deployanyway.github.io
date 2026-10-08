import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { translateError } from "../vendor/error-translator/index.js";
import { excuseBatch } from "../vendor/excuse-js/index.js";
import { preflight } from "../vendor/ship-it-meter/index.js";
import { brosay } from "../vendor/bro-say/index.js";
test("vendored capabilities match demo expectations", () => {
  assert.match(
    translateError("ENOENT", { mode: "rubber-duck" }).explanation,
    /hide-and-seek/,
  );
  assert.equal(
    new Set(excuseBatch("deployment", { seed: "demo", count: 3 })).size,
    3,
  );
  assert.ok(
    preflight({
      tests: 10,
      coverage: 82,
      build: true,
      day: "friday",
    }).actions.some((x) => x.includes("on-call")),
  );
  assert.ok(brosay("passed", { box: true }).startsWith("+"));
});
test("page has discoverable metadata, local assets and accessible output", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /rel="canonical"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /type="importmap"/);
  const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");
  assert.doesNotMatch(app, /\.innerHTML\s*=/);
});

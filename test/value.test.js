import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { renderBuildSummary } from "../dist/browser.js";
import { diagnoseError } from "../vendor/error-translator/index.js";
import { incidentUpdate } from "../vendor/excuse-js/index.js";
import { createDogLogger } from "../vendor/doggo-log/index.js";
import { evaluateReports } from "../vendor/ship-it-meter/index.js";
test("v1 demo assets preserve failure, causes, missing facts, redaction and report blockers", () => {
  assert.equal(renderBuildSummary({ exitCode: 1 }).status, "failed");
  assert.equal(renderBuildSummary({}).status, "unknown");
  const d = diagnoseError({
    message: "Start failed",
    cause: { code: "ENOENT", message: "Missing config" },
  });
  assert.equal(d.chain[1].code, "ENOENT");
  assert.equal(incidentUpdate({}).complete, false);
  assert.throws(() => incidentUpdate({}, { humor: true }), TypeError);
  const line = JSON.parse(
    createDogLogger({
      json: true,
      context: { authorization: "secret" },
      write: () => {},
    }).info("done"),
  );
  assert.equal(line.context.authorization, "[REDACTED]");
  assert.equal(evaluateReports({ commit: "demo" }).passed, false);
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(html.includes("value-1.0.0.js"));
  const module = readFileSync(
    new URL("../value-1.0.0.js", import.meta.url),
    "utf8",
  );
  assert.match(module, /not AsyncLocalStorage/);
  assert.match(module, /not evidence about this site/);
});

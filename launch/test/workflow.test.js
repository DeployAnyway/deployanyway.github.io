import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequestLogger } from "@deployanyway/doggo-log/context";
import { handleRequest, describeResult } from "../workflow.js";

test("actual missing file preserves cause, redacts logs, exposes missing incident facts and returns failure", async () => {
  const dir = await mkdtemp(join(tmpdir(), "deployanyway-launch-"));
  const lines = [],
    output = [];
  const log = createRequestLogger({
    json: true,
    redact: { values: ["demo-secret"] },
    write: (line) => lines.push(JSON.parse(line)),
  });
  try {
    const result = await handleRequest(join(dir, "missing.json"), log);
    assert.equal(result.ok, false);
    assert.equal(result.diagnosis.chain[1].code, "ENOENT");
    assert.equal(
      describeResult(result, (line) => output.push(line)),
      1,
    );
    assert.match(output.join("\n"), /nextUpdate|Not scheduled/i);
    assert.match(output.join("\n"), /FAILED/);
    for (const line of lines) {
      assert.equal(line.context.requestId, "benji-42");
      assert.equal(line.context.authorization, "[REDACTED]");
    }
    assert.doesNotMatch(JSON.stringify(lines), /demo-secret/);
    assert.deepEqual(log.getContext(), {});
  } finally {
    log.dispose();
    await rm(dir, { recursive: true });
  }
});

test("actual configuration succeeds and the command summary preserves success", async () => {
  const dir = await mkdtemp(join(tmpdir(), "deployanyway-launch-"));
  const log = createRequestLogger({ write: () => {} });
  try {
    const path = join(dir, "config.json");
    await writeFile(path, '{"service":"demo"}');
    const result = await handleRequest(path, log);
    assert.deepEqual(result.config, { service: "demo" });
    const output = [];
    assert.equal(
      describeResult(result, (line) => output.push(line)),
      0,
    );
    assert.match(output.join("\n"), /PASSED/);
  } finally {
    log.dispose();
    await rm(dir, { recursive: true });
  }
});

test("malformed real configuration diagnoses SyntaxError rather than claiming success", async () => {
  const dir = await mkdtemp(join(tmpdir(), "deployanyway-launch-"));
  const log = createRequestLogger({ write: () => {} });
  try {
    const path = join(dir, "config.json");
    await writeFile(path, "{broken");
    const result = await handleRequest(path, log);
    assert.equal(result.ok, false);
    assert.equal(result.diagnosis.chain[1].name, "SyntaxError");
  } finally {
    log.dispose();
    await rm(dir, { recursive: true });
  }
});

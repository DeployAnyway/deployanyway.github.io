import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { evaluateReports, parseTestReport } from "@deployanyway/ship-it-meter";
import { renderBuildSummary } from "@deployanyway/bro-say";
if (!process.env.npm_execpath) throw new Error("Run npm run receipts:demo");
for (const [scenario, expected] of [
  ["pass", 0],
  ["fail", 1],
]) {
  const result = spawnSync(
    process.execPath,
    [process.env.npm_execpath, "run", "release:receipts"],
    {
      encoding: "utf8",
      env: { ...process.env, DEPLOYANYWAY_BUILD_EXAMPLE: scenario },
      maxBuffer: 10 * 1024 * 1024,
    },
  );
  if (result.status !== expected) {
    process.stderr.write(result.stderr + result.stdout);
    process.exitCode = 1;
    break;
  }
  const bundle = JSON.parse(readFileSync("receipts.json", "utf8"));
  const gate = evaluateReports(bundle),
    tests = parseTestReport(bundle.tests.data);
  console.log(`\n--- ${scenario}: measured test/coverage/build commands ---`);
  console.log(
    renderBuildSummary(
      {
        label: "Release build",
        exitCode: bundle.build.exitCode,
        tests: {
          passed: tests.passedTests,
          failed: tests.failingTests,
          skipped: tests.skippedTests,
        },
        commit: bundle.commit,
      },
      { format: "plain" },
    ).rendered,
  );
  console.log(
    `Gate: ${gate.passed ? "PASS" : "BLOCKED"}; actual collector exit: ${result.status}`,
  );
  for (const receipt of gate.receipts)
    console.log(
      `${receipt.kind}: ${receipt.accepted ? "accepted" : receipt.issues.join(" ")}`,
    );
  console.log(gate.summary);
}

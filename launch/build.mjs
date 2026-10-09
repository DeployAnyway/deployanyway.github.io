import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
// The failure scenario actually executes invalid JavaScript through node --check.
const files =
  process.env.DEPLOYANYWAY_BUILD_EXAMPLE === "fail"
    ? ["./fixtures/broken.js"]
    : ["./request.mjs", "./workflow.js"];
for (const file of files) {
  const result = spawnSync(
    process.execPath,
    ["--check", fileURLToPath(new URL(file, import.meta.url))],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
    break;
  }
}

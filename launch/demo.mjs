import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
for (const [mode, expected] of [
  ["failure", 1],
  ["healthy", 0],
]) {
  console.log(
    `\n--- ${mode}: real filesystem request; expected exit ${expected} ---`,
  );
  const result = spawnSync(
    process.execPath,
    [fileURLToPath(new URL("./request.mjs", import.meta.url)), mode],
    { encoding: "utf8" },
  );
  process.stdout.write(result.stdout);
  process.stderr.write(result.stderr);
  console.log(`Actual child exit: ${result.status}`);
  if (result.status !== expected) process.exitCode = 1;
}

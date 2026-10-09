import { fileURLToPath } from "node:url";
import { createRequestLogger } from "@deployanyway/doggo-log/context";
import { handleRequest, describeResult } from "./workflow.js";

const mode = process.argv[2];
if (!["failure", "healthy"].includes(mode)) {
  console.error("Usage: node request.mjs failure|healthy");
  process.exitCode = 2;
} else {
  const log = createRequestLogger({
    json: true,
    redact: { values: ["demo-secret"] },
  });
  try {
    const path = fileURLToPath(
      new URL(
        mode === "failure" ? "./missing-config.json" : "./config.json",
        import.meta.url,
      ),
    );
    process.exitCode = describeResult(await handleRequest(path, log));
  } finally {
    log.dispose();
  }
}

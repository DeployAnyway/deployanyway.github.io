import { readFile } from "node:fs/promises";
import { diagnoseError, renderDiagnosis } from "@deployanyway/error-translator";
import { incidentUpdate } from "@deployanyway/excuse-js";
import { renderBuildSummary } from "@deployanyway/bro-say";

// The caller supplies the file and logger. No invented errors or report counts.
export async function handleRequest(path, log) {
  return log.run(
    { requestId: "benji-42", authorization: "demo-secret" },
    async () => {
      log.info("Dallas fetched the request. Benji checked the config.");
      try {
        const config = JSON.parse(await readFile(path, "utf8"));
        log
          .child("config")
          .info("Configuration loaded. Tail velocity: nominal.");
        return { ok: true, config };
      } catch (cause) {
        const error = new Error("Request could not load configuration", {
          cause,
        });
        log.error("Configuration failed. No victory zoomies yet.");
        return { ok: false, diagnosis: diagnoseError(error) };
      }
    },
  );
}

export function describeResult(result, write = console.log) {
  if (!result.ok) {
    write(renderDiagnosis(result.diagnosis));
    const draft = incidentUpdate({
      status: "investigating",
      service: "Demo request",
      impact: "This demo request could not load its configuration",
      action: "Check the cause and restore the configuration file",
      owner: "Demo operator",
    });
    write(draft.message);
  }
  write(
    renderBuildSummary(
      { label: "Request command", exitCode: result.ok ? 0 : 1 },
      { format: "plain" },
    ).rendered,
  );
  return result.ok ? 0 : 1;
}

# Fetch the request. Follow the cause. Bring receipts.

Dallas fetches the request. Benji checks the evidence. Neither gets victory zoomies until the commands pass.

This small runnable project uses the five published DeployAnyway1.0.0 packages. It performs a real missing-file request and a healthy request, then collects actual Node test, c8 coverage and build results. The release demonstration includes an actual deliberately invalid syntax check, so the blocked gate is measured rather than a made-up score.

With Git and Node22.13+ or24:

```sh
git clone https://github.com/DeployAnyway/deployanyway.github.io.git
cd deployanyway.github.io/launch
npm ci
npm run demo
npm run receipts:demo
```

`demo` checks that the missing-file command exits1 and the healthy command exits0. `receipts:demo` checks that the real passing collector exits0 and the failed-build collector exits1; the demonstration harness itself exits0 only if those expectations hold. It leaves the last (blocked) bundle in ignored `receipts.json`. No server is started, request is sent, or incident message is posted.

For one real check on this example:

```sh
npm run release:receipts
npx @deployanyway/ship-it-meter@1.0.0 --report-file receipts.json --json
```

The collector requires clean tracked source and an unchanged Git commit. Commit your edits before collecting evidence. Its timestamps and commit are pipeline claims, not cryptographic signatures. The fixture demonstrates how to wire this into your project; it does not establish that your application is production-ready.

- `workflow.js`: request-scoped doggo logs, configured credential redaction, Error/cause diagnostics, honest incident draft with an explicit missing next update, and bro-say status presentation.
- `test/workflow.test.js`: actual missing/valid/malformed files, request context, redaction and command status.
- `receipts-demo.mjs`: fresh completed tests/coverage/build receipts and ship-it-meter policy.

Do not log arbitrary secret-bearing error messages without reviewing them. doggo-log protects configured context keys and configured literal values; it does not sanitize the separate diagnostic or incident outputs automatically. Keep real stack disclosure opt-in. All examples use dummy credentials and original on-brand humor.

[Try all five tools](https://deployanyway.github.io/) · [Launch walkthrough](https://deployanyway.github.io/launch/)

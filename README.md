# DeployAnyway demos

Public interactive demo: https://deployanyway.github.io/

Launch walkthrough: https://deployanyway.github.io/launch/. The [runnable project](launch/README.md) uses all five published npm packages with actual filesystem failures, request scopes, incident drafts and measured Node/c8/build receipts. CI verifies both passing and blocked builds. [Short launch post](launch/POST.md) is ready to copy and share.

Static HTML, CSS and browser ES modules. No analytics, accounts or backend. Inputs stay in the browser. The five demos use vendored 1.0.0 package source; the dog logger uses a single-string `node:util` adapter because the form does not accept formatting arguments. This adapter is not a replacement for the npm library's full Node formatting behavior.

## Develop

Serve this directory with a local HTTP server and open `index.html`. Run `node --test test/*.test.js` with Node 22 or later. GitHub Actions checks the JavaScript and tests on PRs and deploys main through GitHub Pages.

The root introduces DeployAnyway and gives all five released tools equal discovery cards and named interactive demos. Supported error codes and excuse categories come directly from the vendored APIs. Controls show available modes, structured output, log filtering and release evidence; matching sh/bash commands can be copied. `/candidate/` redirects to the root, preserving queries and fragments for existing links. Root entry scripts use versioned names to avoid the previous app's cache.

To refresh demos, copy the four companion packages' browser-safe `src/*.js` and MIT licenses into `vendor/<package>/`. Build bro-say and copy its `dist/browser.js` and third-party license notices into this site's `dist/`. Review API changes and verify all browser interactions. The site does not fetch package code from a third-party CDN at runtime.

## Explore the released libraries

- bro-say: 13 original characters, 20 moods, six themes and 48 message presets. Choose a category to inspect all six messages; seeded selection is repeatable within this version.
- error-translator: 46 supported errors, full catalog, custom messages and JSON batches. Unknown input receives an explicit fallback.
- excuse-js: 132 original excuses across eleven categories. Inspect each category, generate seeded batches or pair a phrase with a practical next step.
- doggo-log: 48 optional commentary lines across six levels. Explore classic or rotating commentary, an eight-log sequence, filtering and structured context. Sequence and catalog examples use the Node API and include installation/run instructions.
- ship-it-meter: twelve example evidence scenarios, editable JSON, prioritized release plans, gates and scores. These are heuristics based on supplied facts; the browser does not run your CI.

The organization palette and home badge follow the supplied husky artwork. Dallas and Benji inspire the story and playful tone. All five tools retain equal discovery and feedback links.

## License

MIT. Vendored package licenses are included in their directories.

## Practical v1 integrations

Each tool keeps its playful library and adds an equally visible developer-value panel: measured build summaries, Error cause diagnostics, accountable incident drafts, context redaction plus a runnable Node async-scope example, and report-backed release policies. The browser runs actual pure package APIs. AsyncLocalStorage, file reading, CI report collection and process exit preservation run in Node; examples identify those boundaries. Demo receipt data is labeled sample data, never claimed as real CI evidence.

Browser entry scripts and their v1 bundle/vendor directories use release-specific paths. Changing only entry-script queries is insufficient when cached dependent modules have gained exports. Refresh the versioned dependency paths together with entry scripts.

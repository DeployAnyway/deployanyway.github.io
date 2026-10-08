# DeployAnyway demos

Public interactive demo: https://deployanyway.github.io/

Static HTML, CSS and browser ES modules. No analytics, accounts or backend. Inputs stay in the browser. The five demos use vendored 0.3.0 package source; the dog logger uses a single-string `node:util` adapter because the form does not accept formatting arguments. This adapter is not a replacement for the npm library's full Node formatting behavior.

## Develop

Serve this directory with a local HTTP server and open `index.html`. Run `node --test test/*.test.js` with Node 22 or later. GitHub Actions checks the JavaScript and tests on PRs and deploys main through GitHub Pages.

The root serves the released flagship playground with all five tools. `/candidate/` redirects to the root, preserving queries and fragments for existing links. Root entry scripts use versioned names to avoid the previous app's cache.

To refresh demos, copy the four companion packages' browser-safe `src/*.js` and MIT licenses into `vendor/<package>/`. Build bro-say and copy its `dist/browser.js` and third-party license notices into this site's `dist/`. Review API changes and verify all browser interactions. The site does not fetch package code from a third-party CDN at runtime.

## License

MIT. Vendored package licenses are included in their directories.

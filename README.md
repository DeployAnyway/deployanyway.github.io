# DeployAnyway demos

Public interactive demo: https://deployanyway.github.io/

Static HTML, CSS and browser ES modules. No analytics, accounts or backend. Inputs stay in the browser. The five demos use vendored 0.2.0 package source; the dog logger uses a single-string `node:util` adapter because the form does not accept formatting arguments. This adapter is not a replacement for the npm library's full Node formatting behavior.

## Develop

Serve this directory with a local HTTP server and open `index.html`. Run `node --test test/*.test.js` with Node 22 or later. GitHub Actions checks the JavaScript and tests on PRs and deploys main through GitHub Pages.

To refresh demos, copy each package's `src/*.js` and MIT license into `vendor/<package>/`, review API changes, and verify all browser interactions. The site does not fetch package code from a third-party CDN at runtime.

## License

MIT. Vendored package licenses are included in their directories.

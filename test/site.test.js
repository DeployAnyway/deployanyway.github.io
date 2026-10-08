import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
test("root loads released flagship controls and local assets", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /rel="canonical"/);
  assert.match(html, /id="character"/);
  assert.match(html, /id="theme"/);
  assert.match(html, /id="mode"/);
  for (const asset of [
    "app-0.3.0.js",
    "siblings-0.3.0.js",
    "style-54d303f2.css",
  ]) {
    assert.ok(html.includes(asset));
    assert.ok(readFileSync(new URL("../" + asset, import.meta.url)).length);
  }
  assert.match(html, /template=character.md/);
  assert.match(html, /template=bug_report.md/);
});
test("candidate redirect preserves queries and feedback fragments", () => {
  const script = readFileSync(
    new URL("../candidate/redirect.js", import.meta.url),
    "utf8",
  );
  let target;
  const location = {
    href: "https://deployanyway.github.io/candidate/?source=old#feedback-title",
    search: "?source=old",
    hash: "#feedback-title",
    replace: (value) => (target = value),
  };
  new Function("location", script)(location);
  assert.equal(
    target,
    "https://deployanyway.github.io/?source=old#feedback-title",
  );
  const html = readFileSync(
    new URL("../candidate/index.html", import.meta.url),
    "utf8",
  );
  assert.match(html, /http-equiv="refresh"/);
  assert.ok(html.includes('href="../"'));
});

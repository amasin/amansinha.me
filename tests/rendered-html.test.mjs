import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the product portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Aman Sinha/);
  assert.match(html, /products people trust/);
  assert.match(html, /Selected work/);
  assert.match(html, /\$8M\+/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders independently shareable case-study metadata", async () => {
  const response = await render("/work/enterprise-voice");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turning enterprise voice into a product/);
  assert.match(html, /200K\+ endpoints/);
  assert.match(html, /og:title/);
  assert.doesNotMatch(html, /og\.png/);

  const secondResponse = await render("/work/billzwise");
  assert.equal(secondResponse.status, 200);
  const secondHtml = await secondResponse.text();
  assert.match(secondHtml, /broad AI toolkit to one sharp customer promise/);
  assert.match(secondHtml, /Web · Mobile · Backend/);
  assert.match(secondHtml, /og:title/);
  assert.doesNotMatch(secondHtml, /og\.png/);
});

test("renders the printable resume", async () => {
  const response = await render("/resume");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Résumé/);
  assert.match(html, /Wells Fargo/);
  assert.match(html, /IIM Calcutta/);
});

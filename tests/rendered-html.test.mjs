import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/", origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`${origin}${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders a positioned and discoverable product portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Aman Sinha/);
  assert.match(html, /<h1 class="name-heading"><span>Aman Sinha/);
  assert.match(html, /Product clarity for systems/);
  assert.match(html, /Senior product manager and platform product leader/i);
  assert.match(html, /Selected product work/);
  assert.match(html, /Product notes/);
  assert.match(html, /\$8M\+/);
  assert.match(html, /rel="canonical" href="https:\/\/amansinha\.me\/?"/);
  assert.match(html, /ProfilePage/);
  assert.match(html, /Platform product management/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders independently shareable case-study metadata", async () => {
  const response = await render("/work/enterprise-voice");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Turning enterprise voice into a product/);
  assert.match(html, /200K\+ endpoints/);
  assert.match(html, /My contribution/);
  assert.match(html, /Key decisions/);
  assert.match(html, /rel="canonical" href="https:\/\/amansinha\.me\/work\/enterprise-voice"/);
  assert.match(html, /og:title/);
  assert.doesNotMatch(html, /og\.png/);

  const secondResponse = await render("/work/consumer-intelligence");
  assert.equal(secondResponse.status, 200);
  const secondHtml = await secondResponse.text();
  assert.match(secondHtml, /broad AI toolkit to one sharp customer promise/);
  assert.match(secondHtml, /Web · Mobile · Backend/);
  assert.match(secondHtml, /consumer trust/i);
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
  assert.match(html, /rel="canonical" href="https:\/\/amansinha\.me\/resume"/);
  assert.doesNotMatch(html, /63634 36673/);
});

test("renders product insights with independent article metadata", async () => {
  const indexResponse = await render("/insights");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /Product thinking for the/);
  assert.match(indexHtml, /platform-product-decisions/);

  const response = await render("/insights/platform-product-decisions");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /real product is the decision system/i);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /rel="canonical" href="https:\/\/amansinha\.me\/insights\/platform-product-decisions"/);
  assert.match(html, /og:type" content="article"/);
  assert.doesNotMatch(html, /og\.png/);
});

test("exposes crawl instructions and the full route inventory", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /insights\/automation-human-judgment/);
  assert.match(sitemap, /work\/enterprise-voice/);

  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/amansinha\.me\/sitemap\.xml/);
});

test("redirects insecure and www production requests to the canonical domain", async () => {
  const insecureResponse = await render("/insights?source=test", "http://amansinha.me");
  assert.equal(insecureResponse.status, 301);
  assert.equal(insecureResponse.headers.get("location"), "https://amansinha.me/insights?source=test");

  const wwwResponse = await render("/resume", "https://www.amansinha.me");
  assert.equal(wwwResponse.status, 301);
  assert.equal(wwwResponse.headers.get("location"), "https://amansinha.me/resume");
});


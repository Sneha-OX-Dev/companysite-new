export default async function sitemap() {
  const baseUrl = "https://oxygean.com";

  const now = new Date();

  const routes = [
    "",
    "/ai-team",
    "/earn",
    "/home",
    "/how-it-works",
    "/machine-self",
    "/marketplace",
    "/the-problem",
    "/diagram",
    "/whitepaper",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "daily",
    priority: route === "" ? 1.0 : route === "/whitepaper" ? 0.8 : 0.7,
  }));
}

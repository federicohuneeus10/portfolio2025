/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.federicohuneeus.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin", "/api/*"],
  additionalPaths: async (config) => [
    {
      loc: "/custom-page",
      lastmod: new Date().toISOString(),
    },
  ],
};

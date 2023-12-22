/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'http://localhost:3001',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    //exclude: ['/dashboard', '/awesome/secret-page'],
    alternateRefs: [
        {
            href: 'http://localhost:3001/es',
            hreflang: 'es',
        },
        {
            href: 'http://localhost:3001/fr',
            hreflang: 'fr',
        },
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ],
    },
}
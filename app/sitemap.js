/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    const links = [
        { path: '/', priority: .8 },
        { path: '/aquaponie', priority: .7 },
        { path: '/contact', priority: .6 },
        { path: '/drone', priority: .7 },
        { path: '/projects', priority: .9, changeFrequency: 'weekly' },
        { path: '/solutions', priority: .7 },
    ];

    return links.map(link => ({
        url: `http://localhost:3000${link.path}`,
        lastModified: new Date(),
        changeFrequency: link.changeFrequency || 'monthly',
        priority: link.priority
    }));
}
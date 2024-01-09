import { MetadataRoute } from "next"

export default async function sitemap() {
    const baseUrl = 'https://www.taylormadebarbershop.com'
    return [
        { url: baseUrl, changefreq: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/johnsoncitybarbershop`, changefreq: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/johnsoncitybarbershop/barbers`, changefreq: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/greenevillebarbershop`, changefreq: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/greenevillebarbershop/barbers`, changefreq: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/locations`, changefreq: 'monthly', priority: 0.5 },
        { url: `${baseUrl}/aboutus`, changefreq: 'monthly', priority: 0.5 },
    ]
}
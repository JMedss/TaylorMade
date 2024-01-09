import { MetadataRoute } from "next";

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/admin/*', '/privacy', '/accessibility', '/cookie-policy'],
            },
        ],
        sitemap: 'https://www.taylormadebarbershop.com/sitemap.xml',
    }
}
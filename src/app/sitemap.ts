import { MetadataRoute } from 'next';

// Assuming you have a function to get all your dynamic routes
// For example, from a CMS or database
async function getAllDynamicRoutes() {
  // Replace with your actual data fetching logic
  const dynamicItems = await fetch('https://rs786.com.pk/posts').then(res => res.json());

  return dynamicItems.map((item: any) => ({
    slug: item.slug,
    lastModified: new Date(item.updatedAt), // Or item.publishedAt
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rs786.com.pk';

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
  ];

  const dynamicRoutes = await getAllDynamicRoutes();

  const dynamicSitemapEntries = dynamicRoutes.map(route => ({
    url: `${baseUrl}/blog/${route.slug}`,
    lastModified: route.lastModified,
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicSitemapEntries];
}
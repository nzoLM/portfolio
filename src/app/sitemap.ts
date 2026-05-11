import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://enzo-lemoal.fr',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://enzo-lemoal.fr/competences',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
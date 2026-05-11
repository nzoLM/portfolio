import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://enzo-lemoal.fr',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://enzo-lemoal.fr/competences',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
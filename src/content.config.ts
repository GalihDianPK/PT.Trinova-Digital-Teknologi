import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    stat: z.string(),
    statLabel: z.string(),
    size: z.enum(['large', 'small']).default('small'),
    order: z.number(),
  }),
});

export const collections = {
  services,
  'case-studies': caseStudies,
};

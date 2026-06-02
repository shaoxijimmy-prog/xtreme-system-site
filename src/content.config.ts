import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('XtremeSystem Lab'),
    categories: z.array(z.string()).default([]),
    image: z.string().url().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    image: z.string().url().optional(),
    imageAlt: z.string().optional()
  })
});

export const collections = { blog, projects };

import { defineCollection, z } from 'astro:content';

export const collections = {
  posts: defineCollection({
    schema: z.union([
      z.object({
        category: z.string(),
        title: z.string(),
        description: z.string(),
      }),
      z.object({
        categories: z.string(),
        date: z.date(),
        title: z.string(),
        description: z.string(),
        summary: z.string(),
      }),
    ]),
  }),
};

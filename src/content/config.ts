import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      categories: z.string().optional(),
      tag: z.string().optional(),
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
      date: z.date().optional(),
    }),
  }),
};

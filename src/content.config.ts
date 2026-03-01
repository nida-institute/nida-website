import { defineCollection, z } from "astro:content";

export const collections = {
  pages: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      navOrder: z.number().optional(),
      section: z.string().optional(), // used to group items in sidebar
      showInNav: z.boolean().optional().default(true),
      isHome: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),
      updated: z.string().optional(), // ISO date string (e.g., 2026-02-28)
    }),
  }),
};

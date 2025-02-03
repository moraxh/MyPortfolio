import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    isProfessional: z.boolean(),
    githubName: z.string().nullable()
  })
})

export const collections = { projects }
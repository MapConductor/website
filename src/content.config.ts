import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      generateId: ({ entry, data }) => {
        if (typeof data.slug === 'string' && data.slug.length > 0) {
          return data.slug;
        }
        return entry.replace(/\.[^.]+$/, '');
      },
    }),
    schema: docsSchema(),
  }),
};

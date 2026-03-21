// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightMermaid from '@pasqal-io/starlight-client-mermaid';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mapconductor.com',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Match Starlight docs behavior so `~/` points to `src/`
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  integrations: [
    starlight({
      title: 'MapConductor',
      description: 'A unified map SDK for mobile developers',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ja: {
          label: '日本語',
          lang: 'ja',
        },
        'es-419': {
          label: 'Español (Latinoamérica)',
          lang: 'es-419',
        },
      },
      customCss: ['./src/styles/global.css', './src/styles/custom.css'],
      components: {
        Head: './src/components/overrides/Head.astro',
      },
      sidebar: [
        {
          label: 'What is MapConductor',
          translations: {
            ja: 'MapConductorについて',
            'es-419': 'Qué es MapConductor',
          },
          items: [
            {
              slug: 'overview',
              label: 'Overview',
              translations: {
                ja: '概要',
                'es-419': 'Resumen',
              },
            },
            {
              label: 'Architecture',
              slug: 'architecture',
              translations: {
                ja: 'アーキテクチャ',
                'es-419': 'Arquitectura',
              },
            },
            {
              label: 'Roadmap',
              slug: 'roadmap',
              translations: {
                ja: 'ロードマップ',
                'es-419': 'Hoja de ruta',
              },
            },
            {
              label: 'Team',
              slug: 'team',
              translations: {
                ja: 'チーム',
                'es-419': 'Equipo',
              },
            },
            {
              label: 'For Developers',
              slug: 'developers',
              translations: {
                ja: '開発者向け',
                'es-419': 'Para desarrolladores',
              },
            },
            {
              label: 'Why MapConductor Matters',
              slug: 'why-mapconductor',
              translations: {
                ja: 'MapConductorの必要性',
                'es-419': 'Por qué importa MapConductor',
              },
            },
          ],
        },
        // {
        // 	label: 'Docs',
        // 	items: [
        // 		{ label: '', slug: 'overview' },
        // 		{ label: 'Architecture', slug: 'architecture' },
        // 		{ label: 'Roadmap', slug: 'roadmap' },
        // 		{ label: 'Team', slug: 'team' },
        // 		{ label: 'For Developers', slug: 'developers' },
        // 	],
        // },
      ],
      plugins: [
        starlightMermaid({
          mermaidConfig: {
            theme: 'neutral',
            themeVariables: {
              fontSize: '16px',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
            },
            flowchart: {
              htmlLabels: true,
              curve: 'basis',
              padding: 10,
            },
            sequence: {
              htmlLabels: true,
              diagramMarginX: 10,
              diagramMarginY: 10,
              boxMargin: 10,
              messageMargin: 50,
              actorFontSize: 16,
              noteFontSize: 16,
              messageFontSize: 16,
            },
            gantt: {
              htmlLabels: true,
              fontSize: 16,
            },
          },
        }),
      ],
    }),
  ],
});

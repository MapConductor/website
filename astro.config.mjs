// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightMermaid from '@pasqal-io/starlight-client-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://mapconductor.com',
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
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/overrides/Head.astro',
			},
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Introduction', slug: 'intro' },
						{ label: 'Architecture', slug: 'architecture' },
						{ label: 'Roadmap', slug: 'roadmap' },
						{ label: 'Team', slug: 'team' },
						{ label: 'For Developers', slug: 'developers' },
					],
				},
			],
			plugins: [
				starlightMermaid({
					mermaidConfig: {
						theme: 'neutral',
						themeVariables: {
							fontSize: '16px',
							fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
						},
						flowchart: {
							htmlLabels: true,
							curve: 'basis',
							padding: 20,
						},
						sequence: {
							htmlLabels: true,
							diagramMarginX: 20,
							diagramMarginY: 20,
							boxMargin: 20,
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

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGhostCMS from '@matthiesenxyz/starlight-ghostcms';
import fs from 'node:fs';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';

const jsoncString = fs.readFileSync(new URL('./houston-dark.jsonc', import.meta.url), 'utf-8');
const houston = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
	site: 'https://matthiesen.xyz',
	integrations: [
		starlight({
			title: 'MatthiesenXYZ',
			description: 'MatthiesenXYZ - Open Source Software Development & Support',
			tagline: 'Open Source Software Development & Support',
			favicon: 'mxyz-logo.png',
			components: {
				SiteTitle: './src/starlight/SiteTitle.astro',
			},
			expressiveCode: { themes: [ houston ] },
			logo: {
				src: './src/assets/mxyz-logo.png',
				alt: 'MatthiesenXYZ',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/matthiesenxyz',
				gitlab: 'https://gitlab.com/matthiesenxyz',
			},
			customCss: ['./src/styles/starlight.css'],
			plugins: [ 
				starlightGhostCMS({
					ghostURL: "https://ghost.matthiesen.xyz",
					title: "MatthiesenXYZ",
					rssDescription: "MatthiesenXYZ - Open Source Software Development & Support",
				}),
			],
			sidebar: [
				{
					label: 'Astro Integrations',
					autogenerate: { directory: 'astro-integrations' },
				},
				{
					label: 'GitHub Workflow Management',
					autogenerate: { directory: 'git-workflows' },
				}
			],
		}),
	],
});

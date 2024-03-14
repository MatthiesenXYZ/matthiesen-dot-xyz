import { defineConfig, squooshImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGhostCMS from '@matthiesenxyz/starlight-ghostcms';

// https://astro.build/config
export default defineConfig({
	site: 'https://matthiesen.xyz',
	integrations: [
		starlight({
			title: 'MatthiesenXYZ',
			description: 'MatthiesenXYZ - Open Source Software Development & Support',
			tagline: 'Open Source Software Development & Support',
			favicon: 'favicon.png',
			components: {
				SiteTitle: './src/starlight/SiteTitle.astro',
			},
			expressiveCode: {
				themes: ['catppuccin-macchiato','catppuccin-latte'],
			},
			logo: {
				src: './src/assets/mxyz-logo.webp',
				alt: 'MatthiesenXYZ',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/matthiesenxyz',
				gitlab: 'https://gitlab.com/matthiesenxyz',
			},
			customCss: ['./src/styles/starlight.css'],
			editLink: {
				baseUrl: 'https://github.com/MatthiesenXYZ/matthiesen-dot-xyz/edit/main'
			},
			lastUpdated: true,
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
	image: {
		service: squooshImageService(),
	},
	redirects: {
		'/blog/tutorial-ghost-cms-astro': '/blog/astro-ghostcms'
	}
});

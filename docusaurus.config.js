// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MapConductor',
  tagline: 'A unified map SDK for mobile developers',
  url: 'https://mapconductor.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mapconductor',
  projectName: 'mapconductor-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig: {
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'forest'
      }
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ]
};

module.exports = config;

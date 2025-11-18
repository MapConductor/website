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
    locales: ['en', 'ja', 'es-419'],
    localeConfigs: {
      ja: {
        label: '日本語'
      },
      'es-419': {
        label: 'Español (Latinoamérica)'
      }
    }
  },
  themeConfig: {
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'forest'
      },
      options: {
        fontSize: 16,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          padding: 20
        },
        sequence: {
          htmlLabels: true,
          diagramMarginX: 20,
          diagramMarginY: 20,
          boxMargin: 20,
          messageMargin: 50,
          actorFontSize: 16,
          noteFontSize: 16,
          messageFontSize: 16
        },
        gantt: {
          htmlLabels: true,
          fontSize: 16
        }
      }
    },
    navbar: {
      title: 'MapConductor',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs'
        },
        {
          type: 'localeDropdown',
          position: 'left'
        }
      ]
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

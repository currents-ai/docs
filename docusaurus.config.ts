import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FreeText AI Documentation',
  tagline: 'Help and Privacy docs at FreeText AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://freetext.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'currents-ai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'help',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        sitemap: {
          //changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/docs/blog/**', '/docs/markdown-page'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-DWVESMCXRP',
          anonymizeIP: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'privacy',
        path: 'privacy',
        routeBasePath: 'privacy',
        sidebarPath: './sidebarsPrivacy.ts',
        // ... other options
      } 
    ],

    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"))
          postcssOptions.plugins.push(require("autoprefixer"))
          return postcssOptions
        },
      }
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'freetext.ai',
      logo: {
        alt: 'FreeText AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help',
        },
        {
          to: '/privacy/cookies',    
          label: 'Privacy',
          position: 'left',
          activeBaseRegex: `/privacy`,
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://freetext.ai',
          label: 'Go To FreeText AI',
          position: 'right',
        },
      ],
    },
    footer: {
      //style: 'dark',
      //links: [
      //  {
      //    title: 'Docs',
      //    items: [
      //      {
      //        label: 'Tutorial',
      //        to: '/docs/intro',
      //      },
      //    ],
      //  },
      //  {
      //    title: 'Community',
      //    items: [
      //      {
      //        label: 'Stack Overflow',
      //        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //      },
      //      {
      //        label: 'Discord',
      //        href: 'https://discordapp.com/invite/docusaurus',
      //      },
      //      {
      //        label: 'Twitter',
      //        href: 'https://twitter.com/docusaurus',
      //      },
      //    ],
      //  },
      //  {
      //    title: 'More',
      //    items: [
      //      {
      //        label: 'Blog',
      //        to: '/blog',
      //      },
      //      {
      //        label: 'GitHub',
      //        href: 'https://github.com/facebook/docusaurus',
      //      },
      //    ],
      //  },
      //],
      copyright: `Copyright © ${new Date().getFullYear()} FreeText AI Pte. Ltd. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: { 
      appId: '6XF31BUUL9', // The application ID provided by Algolia
      apiKey: 'da3f1b3152a8b6b73fe4dc997453d0f8', // Public API key: it is safe to commit it
      indexName: 'freetext',
      contextualSearch: true,  // Optional: see doc section below

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false, //'search',

      //... other Algolia params
    },

  } satisfies Preset.ThemeConfig,
};

export default config;

# MapConductor Documentation Site

Welcome to the MapConductor documentation repository! This website is built using [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/) to provide comprehensive documentation for the MapConductor SDK. It serves the content for [mapconductor.com](https://mapconductor.com).

MapConductor is a unified map SDK that lets developers write map logic once and run it across multiple map providers (Google Maps, Mapbox, ArcGIS, etc.) without rewriting code.

## 🚀 Project Structure

Inside this Astro + Starlight project, you'll see the following key folders and files:

```text
.
├── public/                 # Static assets like favicons
├── src/
│   ├── assets/             # Images to be embedded in Markdown
│   ├── content/
│   │   └── docs/           # 📝 ALL DOCUMENTATION CONTENT GOES HERE
│   │       ├── ja/         # Japanese translation
│   │       └── es-419/     # Spanish (Latin America) translation
│   └── styles/             # Custom CSS
├── astro.config.mjs        # Main configuration file (Sidebar menus, locales, plugins)
└── package.json
```

## ️🌍 Multiple Languages

MapConductor's documentation supports multiple languages. If you are adding or updating content:

- **English (Root)**: Placed directly in `src/content/docs/`. It acts as the default fallback language.
- **Japanese**: Placed in `src/content/docs/ja/`
- **Spanish (Latin America)**: Placed in `src/content/docs/es-419/`

## 💻 Local Development Environment

We recommend using VS Code for development. Please install the following extensions:

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Running the Site Locally

All commands should be run from the root of the project in your terminal.

| Command            | Action                                                           |
| :----------------- | :--------------------------------------------------------------- |
| `npm install`      | Installs dependencies                                            |
| `npm run dev`      | Starts local dev server at `localhost:4321` (English by default) |
| `npm run start:ja` | Starts local dev server with `host`                              |
| `npm run start:es` | Starts local dev server with `host`                              |
| `npm run build`    | Builds the production site to `./dist/`                          |

## 📝 How to Update Documentation

1. Find the relevant Markdown (`.md`) or MDX (`.mdx`) file inside `src/content/docs/`.
2. Pages are automatically routed based on their file name.
3. If adding a new page, make sure to add it to the sidebar navigation in `astro.config.mjs`!
4. You can embed Mermaid diagrams directly in your markdown thanks to the mermaid plugin integration (`@pasqal-io/starlight-client-mermaid`).

### Useful Links for Maintainers

- [Starlight Documentation](https://starlight.astro.build/) - For learning how to author content, use components, and customize the site.
- [Astro Documentation](https://docs.astro.build/) - For understanding the underlying framework.
- [Mermaid.js Syntax](https://mermaid.js.org/intro/) - For diagram syntax.

# PlexSphere Documentation

Official documentation for PlexSphere, hosted on GitHub Pages and built with [VitePress](https://vitepress.dev/).

🌐 **Live:** [https://plexsphere.github.io](https://plexsphere.github.io)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/plexsphere/plexsphere.github.io.git
cd plexsphere.github.io

# Install dependencies
npm install
```

### Development

Start the local development server with hot-reload:

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`.

### Build

Create a production build:

```bash
npm run docs:build
```

Generated files will be in `docs/.vitepress/dist`.

### Preview

Preview the production build locally:

```bash
npm run docs:preview
```

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for deployment
├── docs/
│   ├── .vitepress/
│   │   └── config.js           # VitePress configuration
│   └── index.md                # Home page
├── .gitignore
├── package.json
└── README.md
```

## 🔄 Deployment

The project automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow handles:

1. Code checkout
2. Dependencies installation
3. VitePress site build
4. Deployment to GitHub Pages

### Setting up GitHub Pages

1. Go to **Settings** → **Pages** in your repository
2. Under **Source**, select **GitHub Actions**
3. The workflow will run automatically on the next push

## 📝 Adding Content

Create new Markdown files in the `docs/` directory:

```markdown
# docs/guide.md
# Guide

Your content here...
```

Add the page to navigation in `docs/.vitepress/config.js`:

```javascript
export default defineConfig({
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ]
  }
})
```

## 🛠️ Technologies

- **[VitePress](https://vitepress.dev/)** - Vue-powered static site generator
- **[GitHub Pages](https://pages.github.com/)** - Free hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 📚 Documentation

- [VitePress Documentation](https://vitepress.dev/)
- [VitePress Theme Configuration](https://vitepress.dev/reference/default-theme-config)
- [Markdown Extensions](https://vitepress.dev/guide/markdown)

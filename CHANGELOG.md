# Changelog

## 1.0.0

Initial release.

### Features

- Parse Lit web component source files (regex-based, no AST dependency)
- Generate **React** wrappers (TypeScript, `@lit/react` `createComponent`)
- Generate **Vue 3** SFCs (`defineProps`, `defineEmits`)
- Generate **Svelte 5** components (`$props()` runes)
- Generate **Angular** standalone components (`@Input`, `@Output`)
- Generate **Solid** components (`splitProps`)
- Generate **Preact** components (native CE support)
- Generate **HTML/CSS** examples (external CSS and inline variants)
- Generate **standalone CSS** files (shadow DOM to light DOM transform)
- Automatic interactivity detection (static / hybrid / interactive)
- `@arc-prism` JSDoc overrides for interactivity level
- Append-only barrel file updates (tier + root)
- Watch mode via chokidar
- Header-based safety — never overwrites manually edited files

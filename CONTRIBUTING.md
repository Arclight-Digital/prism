# Contributing to @arclux/prism

Thanks for your interest in contributing!

## Getting started

```bash
git clone https://github.com/Arclight-Digital/prism.git
cd prism
npm install
```

## Development workflow

```bash
npm test           # Run tests once
npm run test:watch # Run tests in watch mode
npm run lint       # Run ESLint
```

## Making changes

1. Create a branch from `main`
2. Make your changes
3. Ensure `npm test` and `npm run lint` pass
4. Open a pull request

## Code style

- ESM only (`import`/`export`)
- No TypeScript — JSDoc types for documentation
- No build step — source ships as-is
- Regex-based parsing (no AST dependencies)

## Tests

Tests live in `test/` and use [vitest](https://vitest.dev/). Each source module has a corresponding test file. Generator tests use temporary directories for isolation.

## AI / LLM policy

Using LLMs (Claude, ChatGPT, Copilot, etc.) to help write code is fine, but **all LLM output must be reviewed and understood by the contributor before submission**. You are responsible for every line in your PR.

PRs generated entirely by bots (OpenClaw, Dependabot-like AI agents, etc.) without human review will be closed automatically.

## Reporting issues

Please include:
- Node.js version (`node --version`)
- Steps to reproduce
- Expected vs actual behavior

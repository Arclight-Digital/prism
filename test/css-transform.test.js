import { describe, it, expect } from 'vitest';
import { shadowToLight } from '../src/css-transform.js';

const tag = 'arc-button';

describe('shadowToLight', () => {
  it(':host → .tag', () => {
    const result = shadowToLight(':host { display: block; }', tag);
    expect(result).toContain('.arc-button { display: block; }');
  });

  it(':host([attr="val"]) → .tag[data-attr="val"]', () => {
    const result = shadowToLight(':host([variant="primary"]) { color: red; }', tag);
    expect(result).toContain('.arc-button[data-variant="primary"]');
  });

  it(':host([attr]) boolean → .tag[attr]', () => {
    const result = shadowToLight(':host([disabled]) { opacity: 0.5; }', tag);
    expect(result).toContain('.arc-button[disabled]');
  });

  it(':host(:hover) → .tag:hover', () => {
    const result = shadowToLight(':host(:hover) { color: blue; }', tag);
    expect(result).toContain('.arc-button:hover');
  });

  it(':host(::before) → .tag::before', () => {
    const result = shadowToLight(':host(::before) { content: ""; }', tag);
    expect(result).toContain('.arc-button::before');
  });

  it(':host(:not([attr="val"])) → .tag:not([data-attr="val"])', () => {
    const result = shadowToLight(
      ':host(:not([variant="primary"])) { border: 1px solid; }',
      tag,
    );
    expect(result).toContain('.arc-button:not([data-variant="primary"])');
  });

  it('scopes inner selectors: .btn → .tag .btn', () => {
    const result = shadowToLight('.btn { border: none; }', tag);
    expect(result).toContain('.arc-button .btn');
  });

  it('preserves already-scoped selectors', () => {
    const input = '.arc-button .inner { color: red; }';
    const result = shadowToLight(input, tag);
    // Should not double-scope
    expect(result).not.toContain('.arc-button .arc-button');
  });
});

import { describe, it, expect } from 'vitest';
import { resolveTokens } from '../src/resolve-tokens.js';

// loadTokenMap reads from disk, so we test it with a manual map
// and test resolveTokens which is the pure function.

describe('resolveTokens', () => {
  it('resolves simple var(--token) references', () => {
    const map = new Map([['--color-primary', '#007bff']]);
    const result = resolveTokens('color: var(--color-primary);', map);
    expect(result).toBe('color: #007bff;');
  });

  it('resolves nested var() references', () => {
    const map = new Map([
      ['--color-base', 'blue'],
      ['--color-primary', 'var(--color-base)'],
    ]);
    const result = resolveTokens('color: var(--color-primary);', map);
    expect(result).toBe('color: blue;');
  });

  it('uses fallback values when token missing', () => {
    const map = new Map();
    const result = resolveTokens('color: var(--missing, red);', map);
    expect(result).toBe('color: red;');
  });

  it('leaves unresolved vars intact', () => {
    const map = new Map();
    const result = resolveTokens('color: var(--unknown);', map);
    expect(result).toBe('color: var(--unknown);');
  });

  it('handles circular references without infinite loop', () => {
    const map = new Map([
      ['--a', 'var(--b)'],
      ['--b', 'var(--a)'],
    ]);
    const result = resolveTokens('color: var(--a);', map);
    // Should not hang — circular refs stop resolving
    expect(result).toBeDefined();
  });

  it('resolves multiple vars in one declaration', () => {
    const map = new Map([
      ['--spacing-x', '8px'],
      ['--spacing-y', '16px'],
    ]);
    const result = resolveTokens(
      'padding: var(--spacing-y) var(--spacing-x);',
      map,
    );
    expect(result).toBe('padding: 16px 8px;');
  });
});

import { LitElement, html, css } from 'lit';

/**
 * A sample button component for testing.
 */
class ArcButton extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    count: { type: Number },
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'medium';
    this.disabled = false;
    this.count = 0;
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    :host([variant="primary"]) {
      background: var(--arc-color-primary);
      color: var(--arc-color-on-primary);
    }

    :host([variant="secondary"]) {
      background: var(--arc-color-secondary);
    }

    :host([size="small"]) {
      padding: var(--arc-spacing-xs);
    }

    :host([size="medium"]) {
      padding: var(--arc-spacing-sm);
    }

    :host([size="large"]) {
      padding: var(--arc-spacing-md);
    }

    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    :host(:hover) {
      filter: brightness(1.1);
    }

    :host(::before) {
      content: '';
      position: absolute;
    }

    :host(:not([variant="primary"])) {
      border: 1px solid currentColor;
    }

    .btn {
      border: none;
      background: transparent;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .btn > .icon {
      margin-right: 4px;
    }
  `;

  render() {
    return html`
      <button class="btn" aria-label="${this.variant}">
        <slot></slot>
      </button>
    `;
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('arc-click', { bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('arc-action', { detail: { count: this.count } }));
  }
}

customElements.define('arc-button', ArcButton);

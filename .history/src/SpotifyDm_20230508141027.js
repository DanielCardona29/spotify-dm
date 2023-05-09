import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './spotify-dm.css.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <spotify-dm></spotify-dm>
 * ```
 */
export class SpotifyDm extends LitElement {
  static get properties() {
    return {
      /**
       * Description for property
       */
      name: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('spotify-dm-shared-styles'),
    ];
  }

  render() {
    return html`
      <p>Welcome to ${this.name}</p>
      <slot></slot>
    `;
  }
}

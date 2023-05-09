import { LitElement} from 'lit-element';
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

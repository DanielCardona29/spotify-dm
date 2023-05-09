# @Music-for-life/spotify-dm

## Package info

### Package installation

Installation using NPM

```bash
npm install @Music-for-life/spotify-dm
```

### Entry points & exports

- index.js (default)
  - SpotifyDm (Class)
- spotify-dm.js 
  - spotify-dm (Custom Element)


## SpotifyDm (Class) spotify-dm (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { SpotifyDm } from '@Music-for-life/spotify-dm';

class ExampleElement extends SpotifyDm {
  ...
}
```

Use the custom element (defined globally):

```js
import '@Music-for-life/spotify-dm/spotify-dm.js';
```

```html
<spotify-dm ...>
  ...
</spotify-dm>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <spotify-dm></spotify-dm>
```

### Properties

- **name** (attribute: name): string = "Cells"
    Description for property

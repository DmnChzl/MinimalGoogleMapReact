[![npm](https://img.shields.io/npm/v/@dmnchzl/mnml-gmap-react.svg)](https://github.com/dmnchzl/minimalgooglemapreact) [![minified size](https://img.shields.io/bundlephobia/min/@dmnchzl/mnml-gmap-react.svg)](https://www.npmjs.com/package/@dmnchzl/mnml-gmap-react) [![beerware](https://img.shields.io/badge/license-beerware-orange.svg)](https://wikipedia.org/wiki/beerware)

# Minimal Google Map

**@dmnchzl/mnml-gmap-react** is a **React** component to simply inject [Google Maps](https://maps.google.com) 🌍 inside your projet.

This library is published under the Beerware license, which means you can do whatever you want with the code.

This project is powered by [ViteJS](https://vitejs.dev).

## How To Use

First of all, you need to install the package:

```
  npm install @dmnchzl/mnml-gmap-react
```

<details>
  <summary>Equivalent with Yarn</summary>
  
  ```
    yarn add @dmnchzl/mnml-gmap-react
  ```
</details>
<br>

Then, use the component as these samples below:

```jsx
  import React from 'react';
  import { GMap } from '@dmnchzl/mnml-gmap-react';

  /**
   * The 'keyke' (Key + Fake = Cake) is a lie
   * NB: Worst pun ever; i know that...
   */
  const API_KEY = '01wNJmwnZEabSeRBV4vQRV1JMUx1MvyMyA6edTN49PF/yf0aUjY2F4NZfIOq/Yh7x0d38+21sEP6Tck/jEmXdw==';
  const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };

  function App() {
    return (
      <div className="container">
        <GMap
          apiKey={API_KEY}
          defaultCenter={EIFFEL_TOWER}
          defaultZoom={5}
        />
      </div>
    );
  }
```

<details>
  <summary>More options are also available</summary>
  
  ```jsx
    import React from 'react';
    import { GMap } from '@dmnchzl/mnml-gmap-react';
    import styleArray from './styleArray';

    const API_KEY = '01wNJmwnZEabSeRBV4vQRV1JMUx1MvyMyA6edTN49PF/yf0aUjY2F4NZfIOq/Yh7x0d38+21sEP6Tck/jEmXdw==';
    const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };
    const BIG_BEN = { lat: 51.5021, lng: -0.1242 };
    const COLISEUM = { lat: 41.8961, lng: 12.4879 };

    function App() {
      return (
        <div className="container">
          <GMap
            apiKey={API_KEY}
            defaultCenter={EIFFEL_TOWER}
            defaultZoom={5}
            markers={[
              { ...EIFFEL_TOWER, onClick: () => console.log('Eiffel Tower') },
              { ...BIG_BEN, onClick: () => console.log('Big Ben') },
              { ...COLISEUM, onClick: () => console.log('Coliseum') }
            ]}
            styledMap={styleArray}
            enableUI
          />
        </div>
      );
    }
  ```
</details>
<br>

### Important

You need to create a account on [cloud.google.com](https://console.cloud.google.com), and generate an `API_KEY`, to use **Google Maps** API (and so this component).

## Local Development

If you want more,

You can clone the project:

```
git clone https://github.com/dmnchzl/minimalgooglemapreact.git
```

Install dependencies:

```
yarn install
```

Develop locally:

```
yarn dev
```

Run all unit tests:

```
yarn test
```

And finally compile the project:

```
yarn build
```

Enjoy 👍

## License

```
"THE BEER-WARE LICENSE" (Revision 42):
<phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return. Damien Chazoule
```

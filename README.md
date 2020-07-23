<div align="center">
  <img 
    src="https://raw.githubusercontent.com/estebanborai/arrbuffstr/master/docs/icon.png"
    height="120"
    width="120"
  />
  <h1>ArrBuffStr</h1>
  <small>ArrayBuffer - String</small>
  <br />
  <span>Creates Strings from ArrayBuffers and viceversa in NodeJS and the Browser</span>
</div>

## Installation

### NPM

The latest version available in NPM is `v0.1.1`:

```sh
npm install arrbuffstr
```

### GitHub Package Manager

Using the GitHub Package Manager this package is installed by adding a `.npmrc` file with the following:

```
@estebanborai:registry=https://npm.pkg.github.com
```

And the running:

```bash
npm install @estebanborai/arrbuffstr
```

## Usage

```js
import ArrBuffStr from 'arrbuffstr';

const { toArrayBuffer, toString } = ArrBuffStr();

// [object ArrayBuffer]
const arrbuff = toArrayBuffer('hello');

// 'hello'
const str = toString(arrbuff);
```

## Contributions
Any contribution is welcome! Feel free to open a PR or an issue.

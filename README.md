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

```sh
npm install arrbuffstr
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

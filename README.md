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
# using npm
npm install arrbuffstr

# using yarn
yarn add arrbuffstr
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

## Releasing

This package makes use of GitHub Actions for publishing new versions to NPM.
The wofklow is triggered when new releases prefixed with `v` are pushed to
GitHub.

First bump the current version using `npm` as follows:

```sh
# for versions with breaking changes use `major`
npm version major

# for versions with non-breaking changes use `minor`
npm version minor

# for patch versions use `patch`
npm version patch
```

Then push the repository including tag metadata as follows

```sh
git push origin main --follow-tags
```

## Contributions

Any contribution is welcome! Feel free to open a PR or an issue.

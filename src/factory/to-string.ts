import { Env } from '../utils/get-env';

function toStringFactory(env: Env): ArrayBufferToString {
  if (env === Env.Browser) {
    if ('TextDecoder' in window) {
      return (arrbuff: ArrayBuffer): string => {
        const decoder = new TextDecoder('utf-8');

        return decoder.decode(arrbuff);
      };
    }

    return (arrbuff: ArrayBuffer): string => {
      return String.fromCharCode.apply(null, new Uint16Array(arrbuff));
    };
  }

  // Valid for NodeJS v8.3.0>=
  if ('TextDecoder' in global) {
    return (arrbuff: ArrayBuffer): string => {
      const decoder = new TextDecoder('utf-8');

      return decoder.decode(arrbuff);
    };
  }

  return (arrbuff: ArrayBuffer): string => {
    return String.fromCharCode.apply(null, new Uint16Array(arrbuff));
  };
}

export default toStringFactory;

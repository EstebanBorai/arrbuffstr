import { Env } from '../utils/get-env';

function toStringFactory(env: Env): ArrayBufferToString {
  if (env === Env.Browser) {
    if ('TextDecoder' in window) {
      return (arrbuff: ArrayBuffer): string => {
        const decoder = new TextDecoder('utf-8');
        
        return decoder.decode(arrbuff);
      }
    }

    return (arrbuff: ArrayBuffer): string => {
      return String.fromCharCode.apply(null, new Uint16Array(arrbuff));
    }
  }

  throw new Error(`ArrBuffStr is not supported!`);
}

export default toStringFactory;

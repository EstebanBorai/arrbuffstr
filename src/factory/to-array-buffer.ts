import { Env } from '../utils/get-env';

function toArrayBufferFactory(env: Env): StringToArrayBuffer {
  if (env === Env.Browser) {
    if ('TextEncoder' in window) {
      return (str: string): ArrayBuffer => {
        const encoder = new TextEncoder();
        const unint8 = encoder.encode(str);
  
        return unint8.buffer;
      }
    }

    return (str: string): ArrayBuffer => {
      const raw = String.raw`${str}`;
      const buff = new ArrayBuffer(raw.length * 2);
      const strLength = raw.length;
      const uint16 = new Uint16Array(buff);

      let i = 0;

      for (i; i < strLength; i++) {
        uint16[i] = raw.charCodeAt(i);
      }

      return buff;
    }
  }

  // Valid for NodeJS v8.3.0>=
  if ('TextEncoder' in global) {
    return (str: string): ArrayBuffer => {
      const encoder = new TextEncoder();
      const unint8 = encoder.encode(str);

      return unint8.buffer;
    }
  }

  return (str: string): ArrayBuffer => {
    const raw = String.raw`${str}`;
    const buff = new ArrayBuffer(raw.length * 2);
    const strLength = raw.length;
    const uint16 = new Uint16Array(buff);

    let i = 0;

    for (i; i < strLength; i++) {
      uint16[i] = raw.charCodeAt(i);
    }

    return buff;
  }
}

export default toArrayBufferFactory;

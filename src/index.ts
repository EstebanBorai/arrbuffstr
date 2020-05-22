import getEnv, { Env } from './utils/get-env';
import { toArrayBufferFactory, toStringFactory } from './factory/index';

interface ArrBuffStr {
  toArrayBuffer: StringToArrayBuffer;
  toString: ArrayBufferToString;
}

function make(): ArrBuffStr {
  const currentEnv: Env = getEnv();

  if (currentEnv === 'Node') {
    throw new Error(`ArrBuffStr is not supported!`);
  }

  return {
    toArrayBuffer: toArrayBufferFactory(Env.Browser),
    toString: toStringFactory(Env.Browser)
  };
}

export default make;

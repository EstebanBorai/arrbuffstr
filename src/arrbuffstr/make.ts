import getEnv, { Env } from '../utils/get-env';
import { toArrayBufferFactory, toStringFactory } from '../factory/index';

export interface ArrBuffStr {
  toArrayBuffer: StringToArrayBuffer;
  toString: ArrayBufferToString;
}

function make(): ArrBuffStr {
  const currentEnv: Env = getEnv();

  if (currentEnv === 'Node') {
    return {
      toArrayBuffer: toArrayBufferFactory(Env.Node),
      toString: toStringFactory(Env.Node)
    };
  }

  return {
    toArrayBuffer: toArrayBufferFactory(Env.Browser),
    toString: toStringFactory(Env.Browser)
  };
}

export default make;

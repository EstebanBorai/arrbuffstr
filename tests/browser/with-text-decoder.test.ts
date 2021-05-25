import makeArrBuffStr from '../../src';

describe('browser with TexEncoder and TextDecoder support', () => {
  beforeAll(function () {
    const { TextEncoder, TextDecoder } = require('util'); // eslint-disable-line

    global['TextEncoder'] = TextEncoder;
    global['TextDecoder'] = TextDecoder;
  });

  it('creates an arrbuffstr instance with success', () => {
    expect(makeArrBuffStr).not.toThrow();
  });

  it('transforms a string into an array buffer without errors', () => {
    const instance = makeArrBuffStr();
    const arrbuff = instance.toArrayBuffer('HOLA');

    expect(arrbuff).toBeInstanceOf(ArrayBuffer);
  });

  it('in and out', () => {
    expect.assertions(2);

    const instance = makeArrBuffStr();
    const value = 'three sad tigers eat wheat in a wheat field';

    const arrbuff = instance.toArrayBuffer(value);
    const str = instance.toString(arrbuff);

    expect(arrbuff).not.toBe(undefined);
    expect(str).toBe(value);
  });
});

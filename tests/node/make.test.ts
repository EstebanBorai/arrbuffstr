import makeArrBuffStr from '../../src/index';

test('creates an ArrBuffStr instance without throwing', () => {
  expect(makeArrBuffStr).not.toThrow();
});

test('creates toArrayBuffer', () => {
  const instance = makeArrBuffStr();

  expect(instance.toArrayBuffer).not.toBe(undefined);
});

test('creates toString', () => {
  const instance = makeArrBuffStr();

  expect(instance.toString).not.toBe(undefined);
});

test('transforms a string into an array buffer without errors', () => {
  const instance = makeArrBuffStr();
  const arrbuff = instance.toArrayBuffer('HOLA');

  expect(arrbuff).toBeInstanceOf(ArrayBuffer);
});

test('in and out', () => {
  expect.assertions(2);

  const instance = makeArrBuffStr();
  const value = 'three sad tigers eat wheat in a wheat field';

  const arrbuff = instance.toArrayBuffer(value);
  const str = instance.toString(arrbuff);

  expect(arrbuff).not.toBe(undefined);
  expect(str).toBe(value);
});

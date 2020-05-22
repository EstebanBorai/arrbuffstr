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

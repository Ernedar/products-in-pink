import { setLineOfIndexes } from './handlers';

describe('test for function setLineOfIndexes', () => {
  it('should make Array of numbers from currentIndex = 0 and Array.length = 13 with values [11, 12, 0, 1, 2 ].', () => {
    const currentIndex = 0;
    const arrayLength = 13;

    expect(setLineOfIndexes(currentIndex, arrayLength)).toEqual([
      arrayLength - 2,
      arrayLength - 1,
      currentIndex,
      currentIndex + 1,
      currentIndex + 2,
    ]);
  });
  it('should make Array of numbers from currentIndex = 1 and Array.length = 13 with values [12, 0, 1, 2, 3 ].', () => {
    const currentIndex = 1;
    const arrayLength = 13;

    expect(setLineOfIndexes(currentIndex, arrayLength)).toEqual([
      arrayLength - 1,
      0,
      currentIndex,
      currentIndex + 1,
      currentIndex + 2,
    ]);
  });
  it('should make Array of numbers from arrayLength = 13 and currentIndex = arrayLength - 1 with values [10, 11, 12, 0, 1 ].', () => {
    const arrayLength = 13;
    const currentIndex = arrayLength - 1;

    expect(setLineOfIndexes(currentIndex, arrayLength)).toEqual([
      currentIndex - 2,
      currentIndex - 1,
      currentIndex,
      0,
      1,
    ]);
  });
  it('should make Array of numbers from arrayLength = 13 and currentIndex = arrayLength - 2 with values [9, 10, 11, 12, 0 ].', () => {
    const arrayLength = 13;
    const currentIndex = arrayLength - 2;

    expect(setLineOfIndexes(currentIndex, arrayLength)).toEqual([
      currentIndex - 2,
      currentIndex - 1,
      currentIndex,
      currentIndex + 1,
      0,
    ]);
  });
});

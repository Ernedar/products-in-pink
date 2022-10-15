export function setLineOfIndexes(currentIndex: number, arrayLength: number) {
  let setIndexOneLess = currentIndex - 1;
  let setIndexTwoLess = currentIndex - 2;
  let setIndexOneMore = currentIndex + 1;
  let setIndexTwoMore = currentIndex + 2;

  if (currentIndex === 0) {
    setIndexOneLess = arrayLength - 1;
    setIndexTwoLess = arrayLength - 2;
  } else if (currentIndex === 1) {
    setIndexTwoLess = arrayLength - 1;
  } else if (currentIndex === arrayLength - 1) {
    setIndexOneMore = 0;
    setIndexTwoMore = 1;
  } else if (currentIndex === arrayLength - 2) {
    setIndexTwoMore = 0;
  }

  return [
    setIndexTwoLess,
    setIndexOneLess,
    currentIndex,
    setIndexOneMore,
    setIndexTwoMore,
  ];
}

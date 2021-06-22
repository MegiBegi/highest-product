export const sortList = (numberList: number[]): number[] =>
  numberList.sort((firstNumber, secondNumber) => secondNumber - firstNumber);

export const getHighestProduct = (numberList: number[]): number => {
  const sortedList = sortList(numberList);
  const product = sortedList[0] * sortedList[1] * sortedList[2];

  return product;
};

// Doesn't use sort method for performance reasons <- forEach calls the callbackfn function one time only for each element in the array
export const getHighestProductCustom = (numberList: number[]): number => {
  const sortedList: number[] = [];

  numberList.forEach((number: number) => {
    if (!sortedList.length) {
      sortedList.push(number);
      return;
    }

    if (number < (sortedList[2] || 0)) return;

    if (number > (sortedList[0] || 0)) {
      sortedList.unshift(number);
      return;
    }

    if (number > (sortedList[1] || 0)) {
      sortedList[1] !== undefined
        ? sortedList.splice(1, 0, number)
        : sortedList.push(number);
      return;
    }

    if (number > (sortedList[2] || 0)) {
      sortedList[2] !== undefined
        ? sortedList.splice(2, 0, number)
        : sortedList.push(number);
      return;
    }
  });

  return sortedList[0] * sortedList[1] * sortedList[2];
};

// Works also with negative numbers
export const getHighestProductPro = (numberList: number[]): number => {
  const negativeIntegers = numberList.filter((number: number) => number < 0);
  const isNegativeNumbersEligible = negativeIntegers.length > 1;

  if (!isNegativeNumbersEligible) return getHighestProductCustom(numberList);

  // Could be replaced if it causes performance issues <- depending on the size of numberList
  const sortedList = sortList(numberList);
  const lastElementIndex = sortedList.length - 1;

  if (
    sortedList[lastElementIndex] * sortedList[lastElementIndex - 1] >
    sortedList[0] * sortedList[1]
  ) {
    return (
      sortedList[lastElementIndex] *
      sortedList[lastElementIndex - 1] *
      sortedList[0]
    );
  }

  if (
    sortedList[lastElementIndex] * sortedList[lastElementIndex - 1] >
    sortedList[1] * sortedList[2]
  ) {
    return (
      sortedList[lastElementIndex] *
      sortedList[lastElementIndex - 1] *
      sortedList[0]
    );
  }

  return sortedList[0] * sortedList[1] * sortedList[2];
};

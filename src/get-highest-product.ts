export const sortList = (numberList: number[]): number[] =>
  numberList.sort((firstNumber, secondNumber) => secondNumber - firstNumber);

export const getHighestProduct = (numberList: number[]): number => {
  const sortedList = sortList(numberList);
  const product = sortedList[0] * sortedList[1] * sortedList[2];

  return product;
};

// Doesn't use sort method for performance reasons <- forEach calls the callbackfn function one time only for each element in the array
export const getHighestProductCustom = (numberList: number[]): number => {
  const filteredList: number[] = [];

  numberList.forEach((number: number) => {
    if (!filteredList.length) {
      filteredList.push(number);
      return;
    }

    if (number < (filteredList[2] || 0)) return;

    if (number > (filteredList[0] || 0)) {
      filteredList.unshift(number);
      return;
    }

    if (number > (filteredList[1] || 0)) {
      filteredList[1] !== undefined
        ? filteredList.splice(1, 0, number)
        : filteredList.push(number);
      return;
    }

    if (number > (filteredList[2] || 0)) {
      filteredList[2] !== undefined
        ? filteredList.splice(2, 0, number)
        : filteredList.push(number);
      return;
    }
  });

  return filteredList[0] * filteredList[1] * filteredList[2];
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

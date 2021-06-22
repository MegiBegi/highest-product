import {
  getHighestProduct,
  getHighestProductCustom,
  sortList,
  getHighestProductPro
} from "./get-highest-product";

test("returns a list sorted in descending order", () => {
  expect(sortList([0, 1, 10, 2, 6, 5, 3, -7, -2, -5])).toStrictEqual([
    10, 6, 5, 3, 2, 1, 0, -2, -5, -7,
  ]);
});

test("returns the highest product between three of given numbers", () => {
  expect(getHighestProduct([0, 1, 10, 2, 6, 5, 3])).toBe(300);
});

test("returns the highest product between three of given numbers", () => {
  expect(getHighestProductCustom([0, 1, 10, 2, 6, 5, 3])).toBe(300);
});

test("returns the highest product between three of given numbers - handles also negative numbers", () => {
  expect(getHighestProductPro([0, 1, 10, 2, -6, -5, -3])).toBe(300);
});

test("returns the highest product between three of given numbers - handles also negative numbers", () => {
  expect(getHighestProductPro([-6, 4, 5, 1, 0, 2])).toBe(40);
});

test("returns the highest product between three of given numbers - handles also negative numbers", () => {
  expect(getHighestProductPro([-6, -9,-1, 5, 1, 0, 2])).toBe(270);
});

test("returns the highest product between three of given numbers - handles also negative numbers", () => {
  expect(getHighestProductPro([6, 9, 1, 5, 1, 0, 2])).toBe(270);
});

test("returns the highest product between three of given numbers - handles also negative numbers", () => {
  expect(getHighestProductPro([-3, -2, -5, 9, 9, 9])).toBe(729);
});
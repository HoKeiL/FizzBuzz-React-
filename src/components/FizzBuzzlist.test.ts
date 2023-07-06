import FizzBuzzvalue from "./Fizzbuzzlist";

test("return an array with FizzBuzz words", () => {
  expect(FizzBuzzvalue(3)).toBe("Fizz");
  expect(FizzBuzzvalue(4)).toBe(4);
  expect(FizzBuzzvalue(7)).toBe(7);
  expect(FizzBuzzvalue(5)).toBe("Buzz");
  expect(FizzBuzzvalue(15)).toBe("FizzBuzz");
});

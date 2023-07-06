import { FizzBuzzvalue } from ;

test.skip("return an array with FizzBuzz words", () => {
  expect(FizzBuzzvalue(3)).toBe([1,2,"Fizz"]);
  expect(FizzBuzzvalue(5)).toBe([1,2,"Fizz",4,"Buzz"]);
  expect(FizzBuzzvalue(15)).toBe([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
});

export const subtract = (numbers: number[]): number =>
  numbers.reduce((a, b) => a - b, 0);

export const asyncSubtract = (numbers: number[]): Promise<number> =>
  Promise.resolve(subtract(numbers));

export const multiplication = (a: number, b: number): number => a * b;

export const asyncMultiplication = (a: number, b: number): Promise<number> =>
  Promise.resolve(multiplication(a, b));

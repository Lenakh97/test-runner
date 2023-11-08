export const expect2 = (result: any): { toBe: (expected: any) => boolean } => {
  return {
    toBe: (expected: any): boolean => {
      if (result === expected) {
        console.log(`The results are as expected, ${result} === ${expected} `);
        return true;
      }
      console.log(
        `The results are not as expected, ${result} !== ${expected} `
      );
      return false;
    },
  };
};

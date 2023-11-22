export const expect2 = (result: any): { toBe: (expected: any) => void } => {
  return {
    toBe: (expected: any): void => {
      if (result !== expected) {
        throw new Error(`❌ ${result} is not equal to ${expected}`);
      }
    },
  };
};

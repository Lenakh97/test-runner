export const test = (
  description: string,
  assertionContext: () => void | Promise<void>
) => {
  try {
    isPromise(assertionContext())
      ? callAsync(
          description,
          assertionContext as unknown as () => Promise<void>
        )
      : call(description, assertionContext);
  } catch (error) {
    console.log(`❌ ${description}`);
  }
};

const isPromise = (maybePromise: void | Promise<void>) =>
  !!maybePromise &&
  typeof (maybePromise as unknown as Promise<unknown>).then === "function";

const callAsync = (description: string, callback: () => Promise<void>) =>
  callback()
    .then(() => console.log(`✅ ${description}`))
    .catch((error) => console.log(`❌ ${description}`));

const call = (description: string, callback: () => void) => {
  callback();
  console.log(`✅ ${description}`);
};

export const omit = (obj: any, ...keys: string[]) => {
  const keysToRemove = new Set(keys.flat());

  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keysToRemove.has(k))
  );
};

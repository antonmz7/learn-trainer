import { useParams } from 'react-router';

export function useTypedParams<T extends string>(...keys: T[]): Record<T, string> {
  const params = useParams();
  const result = {} as Record<T, string>;

  for (const key of keys) {
    const value = params[key];
    if (value === undefined) {
      throw new Error(
        `Required URL parameter "${key}" is missing. ` +
          `Check that the current route declares ":${key}".`,
      );
    }
    result[key] = value;
  }

  return result;
}

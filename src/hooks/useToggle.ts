import {useState, useCallback} from 'react';

export const useToggle = (defaultValue: boolean) => {
  const [toggle, setToggle] = useState(defaultValue);

  const on = useCallback(() => setToggle(true), []);
  const off = useCallback(() => setToggle(false), []);

  return [toggle, {on, off}] as const;
};

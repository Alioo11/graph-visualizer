import { useCallback, useDebugValue, useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);
  useDebugValue(state);
  return [state, toggle] as const;
};

export default useToggle;

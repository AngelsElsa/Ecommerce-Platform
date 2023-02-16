import { useState } from "react";

export const useToggle = (initialVal: boolean = false) => {
  const [state, setState] = useState<boolean | any>(initialVal);

  const toggle = () => {
    setState((prev: boolean) => !prev);
  };

  return [state, setState, toggle];
};

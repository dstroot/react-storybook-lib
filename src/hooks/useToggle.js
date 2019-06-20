import { useState } from 'react';

// export const useToggle = initial => {
//   const [open, setOpen] = useState(initial);
//   return [open, useCallback(() => setOpen(status => !status))];
// };

export const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};

export const useBoolean = initialValue => {
  const [value, setValue] = useState(initialValue);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  return [value, setTrue, setFalse];
};

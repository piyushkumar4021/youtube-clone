import { useCallback, useState } from 'react';

const useToggle = (initialValue = false) => {
  if (typeof initialValue !== 'boolean')
    console.error('Toggle initial value must be a boolean');

  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(function () {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
};

export default useToggle;

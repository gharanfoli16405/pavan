import { useState } from "react";
import { getStoredValue, saveValue } from "../helper/localStorageHelper";
// import { getStoredValue, saveValue } from "helpers/localStorageHelper";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getStoredValue(key, initialValue));

  const updateValue = (newValue) => {
    const valueToStore = saveValue(key, newValue, value);
    setValue(valueToStore); //
  };

  return [value, updateValue];
};

export default useLocalStorage;

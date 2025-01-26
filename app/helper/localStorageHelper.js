export const getStoredValue = (key, initialValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return initialValue;
    }
    return JSON.parse(storedValue);
  } catch (error) {
    console.error("Error getting value from localStorage:", error);
    return initialValue;
  }
};

export const saveValue = (key, newValue, currentValue) => {
  try {
    const valueToStore =
      typeof newValue === "function" ? newValue(currentValue) : newValue;
    const valueString = JSON.stringify(valueToStore);
    localStorage.setItem(key, valueString);

    return valueToStore;
  } catch (error) {
    console.error("Error setting value to localStorage:", error);
  }
};

import { useEffect, useState } from "react";

const useDarkSide = () => {
  //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [theme, setTheme] = useState("dark");

  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log("🚀 ~ useDarkSide ~ theme:", theme); // current theme
  console.log("🚀 ~ useDarkSide ~ colorTheme:", colorTheme); // swithchtem

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkSide;

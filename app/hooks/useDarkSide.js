import { useEffect } from "react";

const useDarkSide = () => {
  console.log("window.matchMedia", window.matchMedia);

  // بررسی حالت رنگ
  console.log(localStorage.getItem("theme"));
  if (window.matchMedia) {
    console.log("window.matchMedia موجود است: ", window.matchMedia);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("کاربر حالت تیره را ترجیح می‌دهد");
    } else {
      console.log("کاربر حالت روشن را ترجیح می‌دهد");
    }
  } else {
    console.log("window.matchMedia پشتیبانی نمی‌شود");
  }

  useEffect(() => {
    // first;

    return () => {
      // second;
    };
  }, []);

  return "alak";
};

export default useDarkSide;

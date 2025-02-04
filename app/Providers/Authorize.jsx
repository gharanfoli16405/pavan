import { Children, useEffect } from "react";
import { getCookie } from "@utils/helper/cookie";
const Authorize = ({ children }) => {
  const readCookie = async () => {
    const result = await getCookie("testData");
    console.log("🚀 ~ readCookie ~ result:", result);
  };

  useEffect(() => {
    // setCookieAsync();
    readCookie();
  }, []);
  return <>{children}</>;
};

export default Authorize;

import type { JSX } from "react";

type BtnTest = {
  children: JSX.Element;
  // children: React.ReactNode;
};

const BtnTest: React.FC<BtnTest> = ({ children }) => {
  return <button>{children}</button>;
};

export default BtnTest;

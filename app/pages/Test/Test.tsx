import UserInfo from "./components/UserInfo/UserInfo";

const Test = () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <>
      <h1>In the name of god</h1>
      <UserInfo nikName="Alex" age={30} isMarried={false} sum={sum} />
    </>
  );
};

export default Test;

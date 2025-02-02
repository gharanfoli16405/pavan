type UserInfo = {
  nikName: string;
  age: number;
  isMarried: boolean;
  sum: (a: number, b: number) => number;
};

const UserInfo: React.FC<UserInfo> = ({ nikName, age, isMarried, sum }) => {
  return (
    <>
      <p>nikName is {nikName} </p>
      <p>age is {age}</p>
      <p>isMarried : {isMarried ? "true" : "false"}</p>
      <p> 5 + 7 {sum(5, 7)}</p>
    </>
  );
};

export default UserInfo;

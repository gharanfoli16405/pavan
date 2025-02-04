type UserInfo = {
  nikName: string;
  age: number;
  lastName?: string;
};

const UserInfo: React.FC<UserInfo> = (props) => {
  const { nikName, age, lastName } = props;
  return (
    <>
      <div>
        my name is {nikName} {lastName && lastName} . Im {age} years old .
      </div>
    </>
  );
};

export default UserInfo;

// import useDarkSide from "@hooks/useDarkSide";

const Swicher = () => {
  // useDarkSide
  // const [theme, colorTheme] = useDarkSide();
  // useDarkSide();
  return (
    <>
      <button
        className="p-4 border border-black rounded-lg mx-5"
        onClick={() => console.log("swich mode")}
      >
        dark
      </button>
    </>
  );
};

export default Swicher;

import useDarkSide from "@hooks/useDarkSide";

const Swicher = () => {
  // useDarkSide
  const [theme, colorTheme] = useDarkSide();
  return <div>Swicher</div>;
};

export default Swicher;

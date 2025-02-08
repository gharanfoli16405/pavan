import axios from "./https";

const getProduct = async (name) => {
  const url = `/products`;
  const data = await axios.get(url);
  return data;
};

export { getProduct };

import axios from "axios";

export const getProductsAPI = async () => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/product/getproduct`
  );
  return res;
};

export const postProductAPI = async (data) => {
  const res = await axios.post(
    `http://localhost:5000/api/v1/product/createproduct`,
    data,
    {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    }
  );
  return res;
};

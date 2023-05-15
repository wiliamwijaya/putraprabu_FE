import axios from "axios";

export const loginAPI = async (data) => {
  const res = await axios.post(`http://localhost:5000/api/v1/auth/login`, data);
  localStorage.setItem("access_token", res.data.token);
  return res;
};

export const registerAPI = async (data) => {
  const res = await axios.post(
    `http://localhost:5000/api/v1/auth/register`,
    data,
    {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    }
  );
  return res;
};

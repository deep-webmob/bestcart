import axios from "axios";
// import router from "next/router";
import Cookies from "js-cookie";

// creates a user token
export const getUserToken = () => {
  const token = Cookies.get("token");
  return token;
};

///Totally for demo purpose
export const wrapperAPI = async ({
  method,
  path,
  data = null,
  params = {},
  isTokenRequired = true,
}) => {
  const request = {
    // eslint-disable-next-line no-undef
    url: `${process.env.REACT_APP_API_URL}/${path}`,
    method,
    params,
    data,
  };
  try {
    const res = await axios(request);
    return res.data;
  } catch (error) {
    return error;
  }
};

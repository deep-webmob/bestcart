import { wrapperAPI } from "../utils/wrapper";

export const ProductListAPI = async (queryString) => {
  if (queryString)
    return wrapperAPI({
      method: "GET",
      path: `products${queryString}`,
    });
  else
    return wrapperAPI({
      method: "GET",
      path: `products`,
    });
};

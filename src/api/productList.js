import { wrapperAPI } from "../utils/wrapper";

export const ProductListAPI = async () => {
  return wrapperAPI({
    method: "GET",
    path: "products",
  });
};

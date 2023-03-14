import { wrapperAPI } from "../utils/wrapper"

export const ProductDetailAPI = async(id) => {
    console.log(typeof id);
    return wrapperAPI({
        method: "GET",
        path: `products/${id}`
    })
}

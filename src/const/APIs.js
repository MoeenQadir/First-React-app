const BASE_URL_ECOMMERCE = 'https://fakestoreapi.com'
export const APIs = {
    STORE: {
        PRODUCTS: {
            GET_ALL: `${BASE_URL_ECOMMERCE}/products`,
            FIND_BY_ID:  `${BASE_URL_ECOMMERCE}/products/`,
        },
        CATEGORY: {
            GET_ALL:  `${BASE_URL_ECOMMERCE}/products/categories`,
        }
    }
}
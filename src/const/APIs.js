const BASE_URL_ECOMMERCE = process.env.BASE_URL
export const APIs = {
    STORE: {
        PRODUCTS: {
            GET_ALL: `${BASE_URL_ECOMMERCE}/products`,
            FIND_BY_ID: ``,
            GET_PRODUCTS_BY_CATEGORY: ``
        },
        CATEGORY: {
            GET_ALL: ``,
        }
    }
}
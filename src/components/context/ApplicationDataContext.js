import axios from "axios";
import {APIs} from "../../const/APIs";

export const fetchProductsService = async () => {
    await axios.get(APIs.STORE.PRODUCTS.GET_ALL)
        .then(response => {
            return response.data
        })
        .catch(error => {
        });
}
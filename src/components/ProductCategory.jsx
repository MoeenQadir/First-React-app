import '../styles/productcategory.css'
import {useEffect, useState} from "react";
import {Single_list} from "./reuse/ProductComponent";
import axios from "axios";
import {APIs} from "../const/APIs";


function ProductCategory() {
    const [data, setData] = useState([]);
    const fetchProductsService = async () => {
        await axios.get(APIs.STORE.PRODUCTS.GET_ALL)
            .then(response => {
                setData(response.data)            })
            .catch(error => {
            });
    }
    useEffect(() => {
        fetchProductsService()
    }, []);


    return (
        <div className={"Container"}>
            {
                data.map(item => (<Single_list key={item.id} product={item}/>))
            }
        </div>
    );
}

export default ProductCategory;
import '../styles/productcategory.css'
import {useEffect, useState} from "react";
import '../styles/productlist.css'
import {List} from "./reuse/ProductComponent";
import axios from "axios";
import {APIs} from "../const/APIs";


function ProductList() {
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
                data.map(item => (
                    <List key={item.id} product={item}/>
                ))
            }

        </div>
    );
}

export default ProductList;


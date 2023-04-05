import '../styles/productDescription.css'
import {useEffect, useState} from "react";
import {Single_Description} from "./reuse/ProductComponent";
import axios from "axios";
import {APIs} from "../const/APIs";


export default function ProductDescription() {
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
        <>
            {
                data.map(item => (
                    <Single_Description key={item.id} product={item}/>
                ))
            }
        </>


    )
}


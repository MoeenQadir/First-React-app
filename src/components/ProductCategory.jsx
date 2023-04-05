import '../styles/productcategory.css'
import {useEffect, useState} from "react";
import {Single_list} from "./reuse/ProductComponent";
import axios from "axios";
import {APIs} from "../const/APIs";
import {Link} from "react-router-dom";


function ProductCategory() {
    const [data, setData] = useState([]);
    const fetchProductsService = async () => {
        await axios.get(APIs.STORE.CATEGORY.GET_ALL).then(response => {
            setData(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        fetchProductsService()
    }, []);


    return (
        <div className={"Container"}>
            {
                data.map((item, index) => (
                    <div key={index} className="max-w-sm categoryContainer m-5 mt-14 product-list p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item}
                        </h5>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductCategory;
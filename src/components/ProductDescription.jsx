import '../styles/productDescription.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {APIs} from "../const/APIs";
import {useParams} from "react-router-dom";


export default function ProductDescription() {
    const [data, setData] = useState({});
    const {productID} = useParams()
    const fetchProductsService = async () => {
        await axios.get(APIs.STORE.PRODUCTS.FIND_BY_ID + `${productID}`).then(response => {
            setData(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        fetchProductsService()
    }, []);


    return (
        <>
            <div className="productdescriptions">
                <div className="left">
                    <img className="h-auto left-image mb-28 rounded-lg max-w-full " src={data.image} alt="image description"/>
                    <p className="mb-28 text-xl tracking-tight text-gray-900 dark:text-white">
                        Description : {data.description}</p>

                </div>
                <div className="right">
                    <a href="#">
                        <h5 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Category : {data.category}</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-10 text-4xl  tracking-tight text-gray-900 dark:text-white">
                            Title : {data.title}</h5>
                    </a>

                </div>
            </div>
        </>
    )
}


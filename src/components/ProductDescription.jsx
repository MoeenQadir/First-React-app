import '../styles/productDescription.css'
import {useEffect, useState} from "react";
import {fetchProductsService} from "./context/ApplicationDataContext";
import {Single_Description} from "./reuse/ProductComponent";


export default function ProductDescription() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(fetchProductsService)
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


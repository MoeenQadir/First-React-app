import '../styles/productcategory.css'
import {useEffect, useState} from "react";
import {Single_list} from "./reuse/ProductComponent";
import {fetchProductsService} from "./context/ApplicationDataContext";


function ProductCategory() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(fetchProductsService)
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
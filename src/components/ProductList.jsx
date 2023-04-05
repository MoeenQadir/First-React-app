import '../styles/productcategory.css'
import {useEffect, useState} from "react";
import '../styles/productlist.css'
import {fetchProductsService} from "./context/ApplicationDataContext";
import {List} from "./reuse/ProductComponent";


function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(fetchProductsService)
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


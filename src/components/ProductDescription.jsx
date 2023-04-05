import '../styles/productDescription.css'
import {useEffect, useState} from "react";
import axios from "axios";



export default function ProductDescription(){


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
            });
    }, []);


    return(
<>
        {
            data.map(item=>(
                <Single_Description key={item.id} product={item}/>
            ))
        }
</>


    )
}

function Single_Description({product}){
    return(
        <>
            <div className="productdescriptions">
                <div className="left">
                    <img className="h-auto left-image mb-28 rounded-lg max-w-full " src={product.image} alt="image description"/>

                    <p className="mb-28 text-xl tracking-tight text-gray-900 dark:text-white">
                        Description :  {product.description}</p>

                </div>
                <div className="right">
                    <a href="#">
                        <h5 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Category : {product.category}</h5>
                    </a>
                    <a href="#">
                        <h5 className="mb-10 text-4xl  tracking-tight text-gray-900 dark:text-white">
                            Title : {product.title}</h5>
                    </a>

                </div>
            </div>
        </>
    )
}
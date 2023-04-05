import '../styles/productcategory.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import '../styles/productlist.css'



function ProductList (){


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
        <div className={"Container"}>

            {
                data.map(item=>(
                    <List key={item.id} product={item}/>
                ))
            }

        </div>
    );
}

export default ProductList;

function List ({product}) {
    return (
        <div
            className="max-w-sm productcontainer m-5 mt-14 product-list p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img className="h-auto productimage rounded-lg max-w-full mb-5" src={product.image} alt="image description"/>

            <Link to="/productdescription"
               className="inline-flex producttitle items-center px-3 py-2 text-sm font-semibold text-center text-black  rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {product.title}
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                </svg>
            </Link>
        </div>

    );
}


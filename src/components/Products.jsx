import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import axios from "axios"


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [products,setProducts]= useState([])
  // const Flex = () => <div />;
  // const Grid = () => <div />;

useEffect(()=>{
  const getdata = async () => {
    let result = await axios.get(
      `http://localhost:8080/products`);
      // console.log(result.data)
      setProducts(result.data)
    }
    getdata()
},[])

  



  return (
    // <Flex>
    <div>
       <AddProduct/>
        
      {/* // <Grid> */}
        {/* {console.log(products)} */}
      <Product products={products}/>
      {/* </Grid> */}
       <Pagination/>
    {/* // </Flex> */}
    </div>
  );
};

export default Products;

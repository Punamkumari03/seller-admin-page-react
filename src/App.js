import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ListItems from "./components/ListItems";

const App = () => {
  const [productList, setProductList] = useState([]);
  const addProductHandler = (pId, pName, pPrice, pCategory) => {
    setProductList((prev) => {
      return [
        ...prev,
        {
          productid: pId,
          name: pName,
          price: pPrice,
          category: pCategory,
          id: Math.random().toString(),
        },
      ];
    });

    localStorage.setItem(pId, [pName, pPrice, pCategory]);
  };
  const deleteProduct = (e) => {
    const data = e.target.id
    setProductList(()=>{
      return productList.filter(item=> item.productid !== data)
    })
    localStorage.removeItem(data)
    
  };

  return (
    <div>
      <ProductForm
        onAddproduct={addProductHandler}
        
      />
      <ListItems products={productList} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const ProductForm = (props) => {
  const [id, SetId] = useState("");
  const [price, SetPrice] = useState("");
  const [name, SetName] = useState("");
  const [category, SetCategory] = useState("");

  const idChangeHandler = (e) =>{
    SetId(e.target.value)
  }
  const priceChangeHandler = (e) =>{
    SetPrice(e.target.value)
  }
  const nameChangeHandler = (e) =>{
    SetName(e.target.value)
  }
  const categoryChangeHandler = (e) =>{
    SetCategory(e.target.value)
  }
  const AddProductHandler = (e) =>{
    e.preventDefault();
    // console.log(name,price,category)
   props.onAddproduct(id,name,price,category)
   SetId('')
   SetPrice('')
   SetName("")
   SetCategory('')
   
    
    }

  return (
    <div>
      <form onSubmit={AddProductHandler}>
        <label htmlFor="productId">Product ID</label>
        <input id="P-Id" type="number" value={id} onChange={idChangeHandler} />

        <label htmlFor="price">Selling price</label>
        <input id="price" type="number" value={price} onChange={priceChangeHandler} />

        <label htmlFor="name">Product Name</label>
        <input id="name" type="text" value={name} onChange={nameChangeHandler} />
        <label htmlFor="choosecatogary">Choose a Category</label>
        <select aria-label="Default select example" id="description" value={category} onChange={categoryChangeHandler}>
      
          <option value="Skincare">Skincare</option>
          <option value="Electronic Items">Electronic Items</option>
          <option value="Food Items">Food Items</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

import React from 'react'

const ListItems = (props) => {

  return (
    <div>
    <h1>Products</h1>
      <ul>
        {props.products.map((product)=>(
            <li key={product.id}>{product.productid}({product.name})({product.price})({product.category}) <button onClick={props.onDeleteProduct} id={product.productid}>delete product</button></li>
            
        ))}
      </ul>
    </div>
  )
}

export default ListItems

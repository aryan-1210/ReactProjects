import React from 'react'
import styled from 'styled-components'

const ProductBox=styled.div`
background-color:${({type})=>{
  switch(type){
    case 'vegetable':
      return 'lightskyblue';
    case 'fruit' :
      return 'lightgreen';
    case 'grain':
      return 'lightpink';
    default:
      return 'white';    
  }
}};
border: 1px solid #ccc;
border-radius: 8px;
padding: 15px;
margin: 10x 0;
box-shadow: 2px 2px 8px(0,0,0,0.2);
`


const ProductFarmers = ({ name, type, quantity }) => {
  return (
    <ProductBox type={type}>
      <h1>Farmerproducts</h1>
      <h3>Product Name:{name}</h3>
      <h3>Type:{type}</h3>
      <h3>Quantity:{quantity}</h3>
    </ProductBox>

  )
}

export default ProductFarmers

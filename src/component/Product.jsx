import React from 'react'

const Product = () => {
    const product ={
        name:"HP",
        model:"i5 13th gen",
        year:2022
    }
  return (
    <div>
        <h1>Name:{product.name}</h1>
        <h1>Model:{product.model}</h1>
        <h1>Year:{product.year }of Mfg</h1>

    </div>
  )
}

export default Product
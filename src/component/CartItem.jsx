import React from 'react'

const CartItem = () => {
    const items = ["laptop","Mobile","PowerBank","Bag","Bed"]
  return (
    <div>
        <h1>Cart Items</h1>
        {items.length>0 &&<h1>You have {items.length} Product in your Cart</h1>}

        <h1>Product</h1>
        {items.map((itms)=>(
            <ul key={Math.random()}>
                <li>{itms}</li>
            </ul>
        ))}
    </div>
  )
}

export default CartItem
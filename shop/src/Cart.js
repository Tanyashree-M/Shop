import React from 'react'
import './Cart.css'
function Cart({cart,increase,decrease,product})
{
    var quantity=0
    var amount=0
    for (let i=0; i<cart.length; i++){
            quantity+=cart[i].Qty
            amount+=cart[i].price*cart[i].Qty
        }
    
         
    return(
            <div>
                <h1>Your Cart</h1>
                <table border='2'>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {cart.map((i,index) =>
                 <tr key={index}>
                  <td>{i.pdname}</td>
                  <td>
                    <button onClick={()=>decrease(index)} style={{backgroundColor:'lightcoral'}}>-</button>
                    {i.Qty}
                    <button onClick={()=>increase(index,product)} style={{backgroundColor:'lightgreen'}}>+</button>
                  </td>
                  <td>₹{i.price*i.Qty}</td>
                 </tr>
                
                )
                }

                <tr>
                    <th>Total</th>              
                    <td>{quantity}</td>
                    <td>{amount}/-</td>
                </tr>
            </table>
         </div>
          )
}

export default Cart
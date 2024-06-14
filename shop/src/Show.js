import React from 'react'
import './Show.css'

function Show({inp,Products,cart,setCart}){
     const filteredProducts= Products.filter(product => product.pdname.toLowerCase().includes(inp.toLowerCase()))
     const handleClick = (i) =>
     {
          setCart([...cart,{...i,Qty:1}])
     }
     return(
          <div className="filter">
           {filteredProducts.map(i=>
                    <div className="image">
                         <img src={i.imageurl} />
                         <p>Available:{i.Qty} pieces</p>
                         <p>&#8377;{i.price}</p>
                         <button onClick={ () => handleClick(i)} style={{backgroundColor:"rgb(159, 223, 225)",borderRadius:'25px'}}>Add to Cart</button>
                    </div>
                    )}
                    <hr/>
          </div>
           
)
}
export default Show;

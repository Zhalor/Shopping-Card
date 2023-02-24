import { useState } from "react";

function CartItem(props) {
  const [quantity, setQuantity] = useState(props.itemIDs[props.item.id]);

  function removeFromCart(item) {
    let index = 0;
    for(let cartItem of props.cart) {
      if(cartItem.id === item.id) {
        index = props.cart.indexOf(cartItem);
      }
    }
    const copyCart = props.cart;
    copyCart.splice(index, 1);
    props.setCart(arr => copyCart);

    props.setTotal(props.cart.reduce((total, current) => total + current.price, 0));
  }

  if(quantity > 0) {
    return (
      <div className="cart-item">
        <img src={props.item.image} alt="" />
        <p>{props.item.title}</p>
        <p>{props.item.price}</p>
        <p>{quantity}</p>
        <button onClick={() => {setQuantity(quantity - 1); removeFromCart(props.item), 
          console.log(props.cart.length)}}>Remove One</button>
      </div>
    );
  }
}

export {CartItem};
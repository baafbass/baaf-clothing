import {CartItemContainer,ItemDetails} from './cart-item.styles'

const CartItem = ({cartItem}) =>{

const {name,imageUrl,price,quantity} = cartItem;

return(
      <CartItemContainer>
      <img src={imageUrl}/>
      <ItemDetails>
      <span className="name">{name}</span>
      <span>{quantity} x ${price}</span>
      </ItemDetails>
      </CartItemContainer>
 	)
}

export default CartItem;
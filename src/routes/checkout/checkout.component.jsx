import './checkout.styles.scss'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const Checkout = () => {
	const {cartItems,addItemToCart} = useContext(CartContext)
   
	return(
          <div>
          {
          	cartItems.map((cartItem) => {
          		const {id,name,quantity} = cartItem
          		return (
                    <div key={id}>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                     <br/>
                    <span>decreasement</span>
                    <br/>
                    <span onClick={()=>addItemToCart(cartItem)}>increasement</span>
                    </div>
          			)
          	})
          }
          </div>
		)
}

export default Checkout
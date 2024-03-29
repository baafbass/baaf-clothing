import {ProductCardContainer} from "./product-card.styles"
import Button,{BUTTON_TYPES_CLASSES} from '../button/button.component'
import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

const ProductCard = ({product}) =>{

  const {name,price,imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return(
    
       <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <Button onClick={addProductToCart} button_type={BUTTON_TYPES_CLASSES.inverted} >
        Add to Cart
        </Button>
       </ProductCardContainer>
  	)
}

export default ProductCard;
import "./product-card.styles.scss"
import button from '../button/button.component'

const ProductCard = ({product}) =>{
  const {name,price,imageUrl} = product
  return(
       <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <button button_type="inverted">Add to Cart</button>
       </div>
  	)
}

export default ProductCard;
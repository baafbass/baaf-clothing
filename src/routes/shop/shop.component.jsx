import {useContext} from 'react'
import {ProductsContext} from '../../contexts/products.context'

const Shop = () => {

    const {products} = useContext(ProductsContext)
	return(
          <div>
          {
          products.map(({id,name})=>{
          	return (
           <div key={id}>
           <h2>{name}</h2>
           </div>)
          })
          }
          </div>
		)
}

export default Shop;
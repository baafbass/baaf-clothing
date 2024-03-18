import './category.styles.scss'
import {useParams} from 'react-router-dom'
import {useState,useEffect,useContext,Fragment} from 'react'
import {CategoriesContext} from '../../contexts/categories.context'
import ProductCard from "../../components/product-cart/product-cart.component"

const Category = () =>
{
  const {category} = useParams()
  const {categoriesMap} = useContext(CategoriesContext)
  const [products,setProducts] = useState(categoriesMap[category])

  useEffect(()=>{
    setProducts(categoriesMap[category])
    console.log(products)
     },[category,categoriesMap])

  return
  (
    <Fragment>
    <h2 className="category-title">{category.toUpperCase()}</h2>
    <div className="category-container">
    {
      products && products.map((product)=>(<ProductCard key={product.id} product={product}/>))
    }
    </div>
    </Fragment>

   // <div className="category-container">
   // {
   // 	products &&
   // 	products.map((product)=>
   // 		(<ProductCard key={product.id} product={product}/>
   // 	))
   // }
   // </div>
  	)

}

export default Category;
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-cart/product-cart.component';
import {CategoryTitle,CategoryContainer} from './category.styles'

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap && category && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle as='h2'>{category && category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
      
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
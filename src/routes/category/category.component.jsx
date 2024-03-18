import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-cart/product-cart.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Check if categoriesMap and category exist before setting products
    if (categoriesMap && category && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category && category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
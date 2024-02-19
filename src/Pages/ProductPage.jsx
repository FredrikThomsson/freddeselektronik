import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const ProductPage = () => {
    const  {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    console.log('Product:', product); 
  return (
    <div>
     <ProductDisplay product={product} />
    </div>
  )
}

export default ProductPage

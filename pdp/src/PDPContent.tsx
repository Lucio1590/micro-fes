
import React, {useEffect, useState, useRef} from 'react';
import { useParams } from "react-router-dom";
import { getProduct, currency } from "home/products"

import placeAddToCart from "addtocart/placeAddToCart"


interface PDPContentProps {}

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const PDPContent: React.FC<PDPContentProps> = () => {
  const id = Number(useParams<{ id: string }>().id);
  const [product, setProduct] = useState({} as IProduct);
  const addToCart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) {
      setProduct({} as IProduct);
    } else {
      getProduct(id).then(setProduct);
    }
  }, [id]);

  useEffect(() => {
    if(addToCart.current){
      placeAddToCart(addToCart.current, id)
    }
  }, []);

  if (!product) {
    return <h1>NOT FOUND</h1>;
  }

  return (
<div className='grid grid-cols-2 gap-5'>
  <div>
    <img src={product.image} alt={product.name} />
  </div>
  <div>
    <div className="flex align-baseline">
      <h1 className="text-3xl font-bold my-4 flex-grow">{product.name}</h1>
      <div className="text-xl font-medium mb-2 flex-end">{currency.format(product.price)}</div>
    </div>
    <div ref={addToCart}></div>
    <div className="text-lg mb-4">{product.description}</div>
    <div className="text-lg">{product.longDescription}</div>
  </div>
</div>
  );
};

export default PDPContent;

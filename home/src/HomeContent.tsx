import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, currency } from "./products";
import { useLogin, addToCart } from "cart/cart";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;

}

const HomeContent = () => {
  const loggedIn = useLogin();

  const [products, setProducts] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-5">
            <Link className="hover:text-gray-600" to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            
            <div className="flex">
              <div className="flex-grow font-bold">
                <Link className="hover:text-gray-600" to={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <div className="flex-end">
                {currency.format(product.price)}
              </div>
            </div>
            <div className="text-sm mt-4">
              {product.description}
            </div>
            {loggedIn && (
              <div className="text-right mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
                  onClick={() => addToCart(product.id)}
                  id={`addToCart_${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            )}
            {/* <div className="text-lg">{currency(product.price)}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
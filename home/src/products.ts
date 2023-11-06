const API_SERVER = 'http://localhost:8080';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export const getProducts = () => fetch(`${API_SERVER}/products`).then(res => res.json());

export const getProduct = (id: number) => fetch(`${API_SERVER}/products/${id}`).then(res => res.json());

export const currency = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});
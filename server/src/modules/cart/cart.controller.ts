import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import products, { Product } from 'src/products';
import e from 'express';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes:number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1 
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 1, 2]),
    2: initialCart([]),
  };
  

  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async update(@Request() req, @Body() {id} : {id:String}): Promise<Cart> {
    const cart = this.carts[req.user.userId]
    const cartItem = cart.cartItems.find((item) => item.id === Number(id));
    
    if (cartItem) {
      cartItem.quantity++;
    }
    else {
      cart.cartItems.push({
        ...products.find((product) => product.id === Number(id)),
        quantity: 1,
      });
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async delete(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    
    
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }
}

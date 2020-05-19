import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: JSON.parse(localStorage.getItem('cart')) || []
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState(state => {
      return {
        cartItems: state.cartItems.concat(product)
      }
    }, () => {
      // Run after setState done
      localStorage.setItem('cart', JSON.stringify(this.state.cartItems));
    });
  }

  render() {
    return <CartContext.Provider value={{
      cartItems: this.state.cartItems,
      addToCart: this.addToCart
    }}>
      {this.props.children}
    </CartContext.Provider>
  }
}

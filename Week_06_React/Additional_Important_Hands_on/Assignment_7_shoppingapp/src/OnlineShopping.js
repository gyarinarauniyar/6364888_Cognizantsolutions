import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [
        new Cart('Laptop', 80000),
        new Cart('Mobile Phone', 25000),
        new Cart('Smart Watch', 12000),
        new Cart('Headphones', 5000),
        new Cart('Keyboard', 2000)
      ]
    };
  }

  render() {
    return (
      <div>
        <h2 className="greenText">Online Shopping Cart</h2>
        <table className="shoppingTable">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.carts.map((cart, index) => (
              <tr key={index}>
                <td>{cart.itemName}</td>
                <td>{cart.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;

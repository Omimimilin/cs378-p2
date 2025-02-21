import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';

// Menu data
const menuItems = [
  { id: 1, title: 'Gyoza', description: 'Japanese dumplings', imageName: 'gyoza.png', price: 5.99 },
  { id: 2, title: 'Sushi', description: 'Japanese rice rolls', imageName: 'sushi.png', price: 6.99 },
  { id: 3, title: 'Ramen', description: 'Japanese noodle soup', imageName: 'ramen.png', price: 7.99 },
  { id: 4, title: 'Matcha Cake', description: 'Japanese green tea cake', imageName: 'matcha-cake.png', price: 4.99 },
  { id: 5, title: 'Mochi', description: 'Japanese rice cake', imageName: 'mochi.png', price: 3.99 },
  { id: 6, title: 'Yakitori', description: 'Japanese skewered chicken', imageName: 'yakitori.png', price: 2.99 },
  { id: 7, title: 'Takoyaki', description: 'Japanese octopus balls', imageName: 'takoyaki.png', price: 5.99 },
  { id: 8, title: 'Sashimi', description: 'Japanese raw fish', imageName: 'sashimi.png', price: 8.99 },
  { id: 9, title: 'Okonomiyaki', description: 'Japanese savory pancake', imageName: 'okonomiyaki.png', price: 6.99 },
  { id: 10, title: 'Katsu Curry', description: 'Japanese curry with fried pork', imageName: 'katsu-curry.png', price: 9.99 }
];

function App() {
  // State to store the quantity of each item
  const [cart, setCart] = useState({});

  // Function to handle quantity change
  const handleQuantityChange = (itemId, quantity) => {
    setCart(prevCart => {
      const newCart = { ...prevCart, [itemId]: quantity };
      return newCart;
    });
  };

  // Calculate total cost
  const calculateTotal = () => {
    return menuItems.reduce((total, item) => {
      const quantity = cart[item.id] || 0;
      return total + (item.price * quantity);
    }, 0).toFixed(2);
  };

  // Clear all quantities
  const clearAll = () => {
    setCart({});
  };

  // Handle order button click
  const handleOrder = () => {
    const orderedItems = menuItems
      .filter(item => cart[item.id] > 0)
      .map(item => `${item.title}: ${cart[item.id]}`)
      .join('\n');

    if (orderedItems) {
      alert(`Order Placed! \n\nItems Ordered:\n${orderedItems}`);
    } else {
      alert('No items in cart');
    }
  };

  return (
    <div>
      <Header />
      <div>
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            quantity={cart[item.id] || 0} 
            onQuantityChange={handleQuantityChange} 
          />
        ))}
      </div>
      <div className="container text-center mt-4">
        <h4 className="cost-text">Total Cost: ${calculateTotal()}</h4>
        <button className="btn btn-success me-2" onClick={handleOrder}>Order</button>
        <button className="btn btn-danger" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;

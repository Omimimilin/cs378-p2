import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// MenuItem component to display each menu item and quantity controls
const MenuItem = ({ item, quantity, onQuantityChange }) => {
    const { title, description, imageName, price } = item;

    // Increment quantity
    const handleIncrement = () => {
        onQuantityChange(item.id, quantity + 1);
    };

    // Decrement quantity, ensuring it doesn't go below 0
    const handleDecrement = () => {
        if (quantity > 0) {
            onQuantityChange(item.id, quantity - 1);
        }
    };

    return (
        <div className="container mb-4">
    <div className="row justify-content-center">
        <div className="col-4 offset-1">
            <img className="foodpic img-fluid" src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
        </div>
        <div className="col-6">
            <div className="foodTitle h4">{title}</div>
            <div className="foodDescription">{description}</div>
            <div className="foodPrice">
                <div>
                    <span className="h5">${price.toFixed(2)}</span>
                    <div className="quantity-controls mt-2">
                        <button className="btn btn-outline-secondary me-2" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="btn btn-outline-secondary ms-2" onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default MenuItem;

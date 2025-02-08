import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item }) => {
    const { title, description, imageName, price } = item;
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="foodpic" src={`./images/${imageName}`} alt={title} />
                </div>
                <div className="col-8">
                    <div className="foodTitle"> {title}</div>
                    <div className="foodDescription"> {description}</div>
                    <div className="foodPrice">
                        <div>
                            {price}
                            <button className="add-button"> add </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

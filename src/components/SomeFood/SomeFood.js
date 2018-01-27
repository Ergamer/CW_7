import React from 'react';
import "./SomeFood.css"


function SomeFood (props) {
    return (
        <div>
            <button className="Item" onClick={props.click}>
                Hamburger <p>price:80</p>
            </button>
            <button className="Item" onClick={props.click}>
                Cheeseburger <p>price:90</p>
            </button>
            <button className="Item" onClick={props.click}>
                Fries <p>price:35</p>
            </button>
            <button className="Item" onClick={props.click}>
                Coffee <p>price:70</p>
            </button>
            <button className="Item" onClick={props.click}>
                Tea <p>price:35</p>
            </button>
            <button className="Item" onClick={props.click}>
                Cola <p>price:40</p>
            </button>
        </div>

    );
}

export default SomeFood;




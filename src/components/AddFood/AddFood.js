import React from 'react';
import SomeFood from '../SomeFood/SomeFood'
import "./AddFood.css"


function AddFood (props) {
    return (
        <div className="Table">
            {props.item.map((foods, i) => {
                return <SomeFood click={() => props.click(i)} className="Item" />
            })}
        </div>
    );
}

export default AddFood;

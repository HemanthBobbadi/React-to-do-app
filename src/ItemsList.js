import React, { useState } from 'react';

const ItemsList = ({ name, weight, quantity, data }) => {
    const [value, setValue] = useState(parseFloat(weight || quantity));
    const pairs = [name, value];

    const handleclick = () => {
        if (quantity) {
            pairs.push("1"); // Append the value of 1 to the pairs array
        }
        data(pairs); // Call the data function with the updated pairs array
    }
    //Increment Logic
    const getNextValue = (currentValue) => {
        if (currentValue < 1) {
            return Math.min(currentValue + 0.25, 1); // Increment by 0.25 until 1
        }
        if (currentValue >= 1 && currentValue < 15) {
            return Math.min(currentValue + 1, 15); // Increment by 1 after 1
        }
        return currentValue; // Max at 15
    };

    // Decrement logic
    const getPreviousValue = (currentValue) => {
        if (currentValue > 1) {
            return Math.max(currentValue - 1, 1); // Decrement by 1 if above 1
        }
        if (currentValue <= 1 && currentValue > 0) {
            return Math.max(currentValue - 0.25, 0); // Decrement by 0.25 until 0
        }
        return currentValue; // Min at 0
    };

    const handleChange = (e) => {
        const inputValue = parseFloat(e.target.value);
        if (inputValue > value) {
            setValue(getNextValue(value)); // Handle increment
        } else if (inputValue < value) {
            setValue(getPreviousValue(value)); // Handle decrement
        }
    };

    return (
        <div className="list-item">
            <span className="list-name">{name}</span>
            <label className="list-label">
                <input type="number" min="0" max="15" value={value} onChange={handleChange} />
            </label>
            <button className="add-button" onClick={handleclick}>Add</button>
        </div>
    );
};

export default ItemsList;
import React, { useState, useEffect } from 'react';

const ToDoList = ({ data }) => {
    // State to store the list of items][-m0nb vc]
    const [items, setItems] = useState([]);

    // Helper function to format the weight into appropriate units
    const formatWeight = (weight) => {
        if (weight > 1) { return data[2] ? `${weight}` : `${weight}kgs`; }// more than 1kg
        if (weight === 1) { return data[2] ? `${weight}` : `${weight}kg`; } // Exactly 1kg
        return `${weight * 1000} grams`; // Less than 1kg, convert to grams
    };

    // Adds a new item to the list with formatted weight and default properties
    const addItem = (newItem) => {
        const [text, weight] = newItem; // Destructure text and weight from newItem array
        const formattedWeight = formatWeight(weight); // Format the weight
        setItems((prevItems) => [
            ...prevItems, // Preserve existing items
            {
                id: prevItems.length + 1, // Assign a unique ID based on current length
                text, // Item text
                weight: formattedWeight, // Formatted weight
                isChecked: false, // Default checkbox state
            },
        ]);
    };

    // Effect to add a new item whenever the 'data' prop changes
    useEffect(() => {
        if (data) {
            addItem(data); // Add the new item if data is provided
        }
    }, [data]); // Dependency array ensures this runs only when 'data' changes

    // Toggles the checked state of an item by its ID
    const toggleCheckbox = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item // Toggle isChecked
            )
        );
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="right-half">
            <h1>To-Do List</h1>
            <div className="todo-list-container">
                {/* Render each item as a block element instead of a list */}
                {items.map(({ id, text, weight, isChecked }) => (
                    <div key={id} className="todo-item">
                        <label>
                            {/* Checkbox to mark item as complete/incomplete */}
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleCheckbox(id)}
                            />
                            {/* Display item text and weight, with strikethrough if checked */}
                            <span className={isChecked ? "strikethrough" : ""}>
                                {text} - {weight}
                            </span>
                        </label>
                        <button onClick={() => deleteItem(id)}
                            style={{
                                marginLeft: '05px',
                                background: 'none',
                                border: 'none',
                                color: 'red',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
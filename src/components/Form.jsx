import React, { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    // if the input field is empty
    if (!description) return;
    // Clear input fields
    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form id="form" className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} id={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          id="description"
          required
          type="text"
          placeholder="Add an item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;

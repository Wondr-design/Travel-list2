import React from "react";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <>
      <form className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Add an item" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;

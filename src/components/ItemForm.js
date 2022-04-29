import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(itemSubmit, onItemFormSubmit) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemSubmit} 
          category="itemCategory"
          id={uuid}
        />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={e => onItemFormSubmit (e.target.value)}>Add to List</button>
    </form>
  );
}

export default ItemForm;

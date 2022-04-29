import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [itemSubmit, setItemSubmit] = useState("");
  
  
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  let newItemsToDisplay={}

  function handleItemSubmit(event){
    event.preventDefault();
    newItemsToDisplay = {
      name: name,
      category: category
    }
    setItemSubmit(newItemsToDisplay);
    setName("");
    setCategory("");
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true
    return item.category === selectedCategory;
  })
  .filter(item => item.name.includes(searchText));

  const itemsToDisplay = [...filteredItemsToDisplay, newItemsToDisplay];

  return (
    <div className="ShoppingList">
      <ItemForm 
        itemSubmit={itemSubmit} 
        onItemFormSubmit={handleItemSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={setSearchText} 
        searchText={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

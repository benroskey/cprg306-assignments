"use client";

import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortby, setSortBy] = useState("name");

  let array = itemsData;

  //below returns the javascript
  array.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  if (sortby === "category") {
    array.sort ((a,b) => {
      return a.category.localeCompare(b.category)
    })
  };

  // below returns the html that the UI front end will render
  return (
    <div>
      <button onClick={() => setSortBy("name")}>Sort by Name</button>
      <button onClick={() => setSortBy("category")}> Sort by Category </button>
      {array.map((item) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
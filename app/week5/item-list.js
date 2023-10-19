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
      <button className=  "text-green-600 bg-red-400 border border-8 p-10 rounded-md m-5 active:bg-blue-400" 
      onClick={() => setSortBy("name")}>Sort by Name</button><br/>
      <button className= "text-blue-400 bg-red-400 border p-1 rounded-md m-5 active:bg-yellow-400"
      onClick={() => setSortBy("category")}> Sort by Category </button>

      <button onClick={() => setSortBy("name")} className={`${sortby === "name" ? "bg-green-400" : "bg-red-600"} text-green-600 border border-8 p-10 rounded-md m-5`}
      >Sort by Name</button>


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
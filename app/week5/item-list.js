"use client";

import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortby, setSortBy] = useState("name");

  let array = itemsData;

  //below returns the javascript
  let sortedarray = array.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // below returns the html that the UI front end will render
  return sortedarray.map((item) => (
    <Item name={item.name} quantity={item.quantity} category={item.category} />
  ));
}

"use client";

import { useState } from 'react';

export default function NewEvent() {
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const [catergory, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        // this prevents the form's default submission behvior
    
    const NewEvent = {
        name,
        quantity,
        catergory,
    };

    console.log(NewEvent);

    setEventCreated(true);

    setName("");
    setQuantity(1);
    setCategory("produce");

    setEventCreated(false);
};
    //Reset the state variables to their initial values.

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <h1 className="text-5x1 font-bold mb-5"> New Item </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2">Name</label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2">Quantity</label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2">Category</label>
                    <select
                        className="border border-gray-400 p-2 w-full"
                        value={catergory}
                        onChange={handleCategoryChange}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </main>
    );
}
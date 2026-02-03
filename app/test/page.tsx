"use client";
import { useState } from "react";

export default function Page() {
    // 1️⃣ State for input and items
    const [input, setInput] = useState("");          // What user types
    const [items, setItems] = useState<string[]>([]); // List of items

    // 2️⃣ Add item function
    const addItem = () => {
        if (input.trim() === "") return; // Guard: don't add empty strings
        setItems([...items, input]);     // Add input to items
        setInput("");                     // Clear input
    };

    // 3️⃣ Delete single item
    const deleteItem = (indexToDelete: number) => {
        const newItems = items.filter((_, index) => index !== indexToDelete);
        setItems(newItems);
    };

    // 4️⃣ Clear all items
    const clearList = () => setItems([]);

    return (
        <div style={{ padding: 20 }}>
            <h2>Mini List App</h2>

            {/* Input + Add button */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something"
            />
            <button onClick={addItem}>Add</button>

            {/* Item count */}
            <p>Total items: {items.length}</p>

            {/* List of items */}
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        {item}{" "}
                        <button onClick={() => deleteItem(i)}>Delete</button>
                    </li>
                ))}
            </ul>

            {/* Clear all */}
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}

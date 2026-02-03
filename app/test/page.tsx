"use client";
import { useState } from "react";

export default function Page() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        if (input.trim() === "") return;
        setItems([...items, input]);
        setInput("");
        console.log([...items, input]);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Mini List App</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something"
            />

            <button onClick={addItem}>Add</button>
            <button onClick={() => setItems([])}>Clear List</button>

            <ul>
                {items.map((item, i) => (
                    <><li key={i}>{item}</li>
                        {/* whenever you want to delete, you use filter method */}
                        <button onClick={() => setItems(items.filter((_, j) => j !== i))}>Delete</button></>

                ))}
            </ul>
        </div>
    );
}

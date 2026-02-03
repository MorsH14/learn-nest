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

            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

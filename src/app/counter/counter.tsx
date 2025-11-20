'use client';
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Counter: {counter}</p>
            <button type="button" onClick={() => setCounter(prev => prev + 1)} className="cursor-pointer">Increment</button>
        </div>
    )
}

export default Counter;
import { useState } from 'react';
import './Counter.scss'

export function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <button
                onClick={() => setCount((count) => count + 1)}
            >
                Increment
            </button>
            <div>{count}</div>
            <button
                onClick={() => setCount((count) => count - 1)}
            >
                Decrement
            </button>
        </>
    )
}
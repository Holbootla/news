import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <button
                className={classes.btn}
                onClick={() => setCount((count) => count + 1)}
            >
                Increment
            </button>
            <div>{count}</div>
            <button
                className={classes.btn}
                onClick={() => setCount((count) => count - 1)}
            >
                Decrement
            </button>
        </>
    )
};

export default Counter;
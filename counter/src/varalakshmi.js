import React, { useState } from 'react';
import trashCanIcon from '../src/images/trash-can-icon.jpg';




const Varalakshmi = () => {
    const [count, setCount] = useState(0);
    const [colors, setColor] = useState("Green");
    
    const Increment = () => {
        setCount(count + 1);

    }

    const Decrement = () => {
        return count ? setCount(count - 1) : count;
    }

    const colorChange = () => {
        return (colors === 'Green') ? setColor('Red') : setColor('Green');
    }
    return (
        <div>
            <h1>hello</h1>
            <button onClick={Increment} className="Increment">Increment</button>
            <button onClick={Decrement} className="Decrement">Decrement</button>
            <button onClick={console.log('click')}>
                <img src={trashCanIcon} alt="Delete" />
            </button>
            <span>{count}</span><br />
            <button style={{ backgroundColor: colors }} onClick={colorChange}>Click</button>
        </div>
    );
}

export default Varalakshmi;
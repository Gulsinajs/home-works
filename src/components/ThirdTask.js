import React, {useState} from "react";

const ThirdTask = () => {
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(25);

    return (
        <div>
            <button onClick={() => setColor('red')}>red</button>
            <button onClick={() => setColor('blue')}>blue</button>
            <button onClick={() => setSize(size + 2)}>+2</button>
            <p style={{color: color, fontSize: size}}>Title</p>
        </div>
    )
}

export default ThirdTask;



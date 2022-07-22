import React, {useState} from "react";

const FirstTask = () => {
    const [text, setText] = useState('No click');

    function changeText() {
        if (text === 'No click') {
            setText('Click');
        } else {
            setText('No click');
        }
    }

    return (
        <div className="container">
        <button onClick={changeText}>click me</button>
            <p>{text}</p>
        </div>
    )
}

export default FirstTask;
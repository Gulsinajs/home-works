import React, {useState} from "react";

const SecondTask = () => {
    const [count, setCount] = useState(4);

    function decrementCount() {
        setCount(count - 1);
    }

    function incrementCount() {
        setCount(count + 1);
    }

    const [countOne, setCountOne] = useState(1);
    const [countFive, setCountFive] = useState(5);
    const [countTen, setCountTen] = useState(0);

    function incrementCountOne() {
        setCountOne(countOne + 1);
    }

    function incrementCountFive() {
        setCountFive(countFive + 5);
    }

    function incrementCountTen() {
        setCountTen(countTen + 10);
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span> {count} </span>
            <button onClick={incrementCount}>+</button>
            <br/><br/>
            <button onClick={incrementCountOne}>+1</button>
            <span> {countOne} </span><br/><br/>
            <button onClick={incrementCountFive}>+5</button>
            <span> {countFive} </span><br/><br/>
            <button onClick={incrementCountTen}>+10</button>
            <span> {countTen} </span><br/><br/>
        </div>
    )
}

export default SecondTask;
import React, {useState} from "react";

// 1) Написать компонент по рейтингу, он принимает два пропса,
// 1 - максимальное количество звезд, 2 - сколько выбрано звезд.
//     На скрине максмум 4 звезды, а выбрано 3.


const Task1 = (props) => {

    const newArray = (elem, item) => {
        let array = [1, 2, 3, 4];
        for (let i = 0; i < elem; i++) {
            if (i < item) {
                array.push("yellow");
            } else {
                array.push("#d9d9d9");
            }
        }
        return array;
    }

    let arrayStar = newArray(props.elem, props.item);


    return (
        <div className="flex">
            <p>Rating</p>
            {
                arrayStar.map(item =>
                    <div className="star" style={{backgroundColor: item}}></div>
                )
            }
        </div>
    )
}

export default Task1;
import React from "react";

// 2) Сделать компонент для тегов, теги мы отправляем в таком формате:
//
//     tags = [
//         { title: 'Тег №1', href: 'http://link1.ru'},
//         { title: 'Тег №2', href: 'http://link2.ru'},
//         { title: 'Тег №3', href: 'http://link3.ru'},
//     ]

const Task2 = () => {
    let tags = [
        {title: 'Тег №1', href: 'http://link1.ru'},
        {title: 'Тег №2', href: 'http://link2.ru'},
        {title: 'Тег №3', href: 'http://link3.ru'},
    ]

    const tagsArray = tags.map(item => (
            <a href={item.href}>{item.title}</a>
        )
    );
    return (
        <div className="links">
            {tagsArray}
        </div>
    )

}

export default Task2;
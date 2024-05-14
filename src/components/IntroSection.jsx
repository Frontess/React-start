import React from "react";

export default function IntroSection() {
    return React.createElement('section', null, [
        React.createElement('h1', {className: 'centered', key: 1}, 'Превратите уездный город в столицу земного шара'),
        React.createElement('h3', {className: 'centered', style: {color: '#F54932'}, key: 2}, 'Этапы преображения Васюков'),
])
}
// createElement принимает три параметра: 1-тег, 2-какие опции передаем в этот тег например класс
// 3 - какие дети будут у этого элемента, контент
// если третий элемент состоит из нескольких тегов, то оборачиваем их в массив[]


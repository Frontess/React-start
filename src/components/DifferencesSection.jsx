import Button from "./Button/Button"
import { useState } from "react" //это хук сигнал о создании реактивного состояния для компонента 

import { differences } from '../data'

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)// хуки всегда используются внутри компонента и только на верхнем уровне

//contentType - значение, начальное состояние 
//setContentType - функция, всегда пишут через set

  function handleClick(type) {
    setContentType(type)
    // contentType = type
}
    return(
        <section>
        <h3>Участники турнира</h3>
        <Button isActive={contentType === 'way'} 
        onClick={() => handleClick('way')}>Подробнее</Button>
        <Button isActive={contentType === 'easy'} 
        onClick={() => handleClick('easy')}>Поддержать шахматную мысль</Button>
        <Button isActive={contentType === 'program'}
         onClick={() => handleClick('program')}>Подробнее о турнире</Button>
     
     
     {!contentType && <p>Нажми на кнопку, чтобы узнать больше</p> }
     {contentType && <p>{ differences[contentType] }</p> }
      </section>
    )
}
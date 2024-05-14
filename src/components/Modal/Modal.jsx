import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'

import './Modal.css'

export default function Modal({ children, open }) {
    const dialog = useRef()

    useEffect(() => {
        if (open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    
    }, [open])

    
    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal')
    )
    
}

//children - передаем в качестве наполнения 
// порталы в реакте import { createPortal } from 'react-dom'
// useRef позволяет взаимодествовать с элементами
// импортируем хук useeffect используем исключительно в компонентах или в кастомных хуках
// useeffect ничего не возвращает и принимает два параметра
// первый - функция будет выполняться когда выаполнится эффект - регистрируем задачи которые реакт компоненту необходимо будет выпонить
//второй массив зависимостей от чего зависит этот эффект
// указываем состояния которые влияют на перерисовку компонентов
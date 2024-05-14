import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
    const input = useRef()
const [value, setValue] = useState('')
const [show, setShow] = useState(false)

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        setShow(true)
    }
}

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3> 
{/* // current свойство которое указывает на дом элемент к которому привязан этот инпут */}
            <input 
            ref={input}
            type="text"
            onKeyDown={handleKeyDown} className='control'/>
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })

    // const [name, setName] = useState('') // в скобках то что будет по умолчанию его начальное состояние
    // const [reason, setReason] = useState('error')
    // const [hasError, setHasError] = useState(true) // для состояния ошибки в заполнении формы

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }
// функция для отображения в форме набранных букв

    return (
        <section>
            <h3>Обратная связь</h3>

            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" 
                className='control' 
                id='name' 
                value={form.name} 
                style={{border: form.hasError ? '2px solid red' : null }} 
                onChange={handleNameChange}/>

                <label htmlFor="reason">Причина обращения</label>
                <select id='reason' className='control' value={form.reason} 
                onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value}))}>
                    <option value="error">Записаться на турнир</option>
                    <option value="help">Сотрудничество</option>
                    <option value="suggest">Другое</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError}>
                    Отправить
                </Button>
            </form>
            <StateVsRef />
        </section>
    )
}
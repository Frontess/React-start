// use создаем кастомные хуки - это функция в которой мы можем использовать хуки usestate useEffect bи др

import { useState } from "react"

export default function useInput(defaultValue = '') {
const [value, setValue] = useState(defaultValue)

return {
    value,
    onChange: (event) => setValue(event.target.value),
}
}
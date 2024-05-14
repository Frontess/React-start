import { useEffect, useState } from 'react'
import logo from '/logo.svg'
import { styled } from 'styled-components'
// импортируем стили из библиотеки stled-components используем объект styled
// в объекте styled есть свои ключи совпадающие с названиями html тегов
// import './Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`
// напрямую передаем параменты стилей в функцию с помощью синтаксиса
// получаем готовый реакт компонент со стилями

export default function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
   const interval = setInterval(() => setNow(new Date()), 1000)

   return () => {
    clearInterval(interval)
   }
  }, [])
   // этот код о том что мы заботимся о памяти у нас не будет утечек памяти
  
    return (
      <HeaderContainer>
        <img src={logo} alt={'LOGO'} />
    
          <span>Точное время: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )    
  }
  
  
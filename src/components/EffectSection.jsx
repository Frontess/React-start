import { useEffect, useState} from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
// этот состояния
//json запрос в отдельной асинхронной функции затем useeffect
// хук usecallback для того чтобы закэшировать данные чтобы у фукнции не менялся указатель

// fetchUsers - результат работы метода usecallback

useEffect(() => {
   async function fetchUsers() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }
    fetchUsers()
}, [])


    return(
        <section>
            <h3>Effects</h3>
            <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть модальное окно</Button> 
            <Modal open={modal}>
                <h3>
                Шахматы двигают вперёд не только культуру, но и экономику!
                </h3>
                <p>Оплатите взнос 
                    на телеграммы для организации Международного васюкинского 
                    турнира по шахматам
                </p>
                <Button onClick={() => setModal(false)}>Закрыть модальное окно</Button>

            </Modal>
            {loading && <p>Loading ...</p>}
            {!loading && (
                <>
                <h3 style={{textAlign:'center', color:'#F54932'}}>Участники турнира</h3>
                <label htmlFor="filter">Поиск участников турнира</label>
                <input type="text" className="control" {...input} />
                
                <ul> {users.filter((user) => 
               user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => 
                (<li key={user.id}>{user.name}</li>))}
                </ul></>
            )}
        </section>
    )
}

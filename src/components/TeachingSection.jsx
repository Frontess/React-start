import WaytoTeach from "./WaytoTeach"
import { ways } from '../data'

export default function TeachingSection() {
    return (
        <section>
        <ul>
          {ways.map((way) => (<WaytoTeach key={way.title} { ...way} />))} 
        
        {/* метод js map позволяет преобразовать массив в другой массив, 
        на каждой итерации получаем какой-то way 
        и преобразуем его в компонент WaytoTeach куда передаем way 
        который на каждой итерации будет ссответствовать индексу */}

        {/* чтобы не было ошибки в консоли нужно добавить невидимый параметр key 
        который должен содержать в себе уникальное значение  */}

          {/* <WaytoTeach title={ways[0].title} description={ways[0].description}/>
          <WaytoTeach { ...ways [1]} />
          <WaytoTeach { ...ways [2]} />
          <WaytoTeach { ...ways [3]} />
          <WaytoTeach { ...ways [4]} /> */}
        </ul>
      </section>
    )
}
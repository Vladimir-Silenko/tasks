import styled from "styled-components"
import { Container } from "../Container"

const Div = styled(Container)`
    display:flex;
    flex-direction:column;
    border:none;
`
const Prog1 = () => {
    const arr = ['Санкт-петербург', 'Москва', 'Екатеринбург', 'Ростов-на-дону']
    return <Container>
        <h3>
            Задача 1
        </h3>
        <p>
            Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка.
            Пример:
            «Москва, Санкт-Петербург, Воронеж.»

        </p>
        <Div>
            <pre>
                {`
            const arr = ['Санкт-петербург', 'Москва', 'Екатеринбург', 'Ростов-на-дону']

             arr.map((item, index) => {
                return <span>{index === arr.length - 1 ? item + '.' : item + ', '}</span>
            }) 
            `}
            </pre>

            <div>
                {arr.map((item, index) => {
                    return <span key={index}>{index === arr.length - 1 ? item + '.' : item + ', '}</span>
                })}
            </div>
        </Div>
    </Container>
}
export default Prog1
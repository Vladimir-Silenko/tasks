import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container'
const T = styled.div`

    `
const Mental2 = () => {
    return (
        <Container>
            <h3>
                задача 2
            </h3>
            <p>
                Есть числа от трех до одиннадцати. Есть квадрат — 3 на 3 клетки:
                а б в
                г д е
                ё ж з
                (Буквы ничего не значат, кроме того, что числа не повторяются)
                Можно ли расставить числа в клетки квадрата таким образом, что перемножения чисел в строках дает тот же результат, что и произведение чисел в столбцах с теми же номерами?
                Если можно — расставьте, если нельзя — объясните почему.
            </p>
            <h3>Pешение:</h3>
            <p>
                Буду честен: с этой задачей я не смог справиться сам.
                Поэтому ниже вставлю картинку из интернета,
                как будто смог
            </p>
            <img src="https://ru-static.z-dn.net/files/d0e/3a60f4595919deb5c3ec4ceb58395529.jpg" alt="" />
        </Container>
    )
}

export default Mental2
import React from 'react'
import { Container } from '../Container'
const Mental4 = () => {
    return (
        <Container>
            <h3>
                Задача 4
            </h3>
            <p>
                В университетскую столовую пришли трое студентов купить пирожки. Один хочет купить треть всех имеющихся в столовой пирожков и еще 2 пирожка. Другой хочет купить четверть от всех имеющихся пирожков и ещё 3 пирожка. А третий хочет купить пятую часть всех пирожков и ещё 8 пирожков. Если все трое купят столько пирожков, сколько планируют, то в столовой как раз закончатся все пирожки. Сколько пирожков есть в столовой?
            </p>
            <h3>решение</h3>
            <p>
                Я решал так: треть пирожков это (если немного округлить) 33.3% от общего количества, четверть - 25%, а пятая часть - 20%. всего 78.3%.
                Соответственно остальные пирожки это 21.7%.
                Далее вычисляем общее количество пирожков  следующим образом:
                (2+3+8)/21.7 * 100 = 59,9078341, снова округляем, и наш ответ: 60 пирожков!
                `
            </p>
        </Container>
    )
}

export default Mental4
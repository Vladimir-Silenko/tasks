import React from 'react'
import { Container } from '../Container'
const Mental3 = () => {
    return (
        <Container>
            <h3>
                задача 3
            </h3>
            <p>
                Ученые разработали новый материал неизвестной прочности. Они знают, что материал разбивается при падении с высоты от 1 метра до 5 000 метров. Но не знают, с какой именно высоты. Чтобы определить прочность, ученые поднимают предмет на некоторую высоту и сбрасывают его оттуда. Их задача — определить, начиная с какой именно высоты предмет начнет разбиваться.
                Специальная платформа, с помощью которой они осуществляют эксперимент, скидывает предмет только с дискретных высот (1, 2, 3 ... 4999, 5000 метров — платформа не может скинуть предмет, например, с 2,5 метров. Точности в 1 метр ученым вполне достаточно). При падении с высоты "n" метров предмет уничтожается. Если же его сбрасывали с высоты ниже "n", то его можно использовать в повторных экспериментах.
                Нужно АБСОЛЮТНО ТОЧНО найти ту высоту, начиная с которой предметы разрушаются. Сделать это нужно за МИНИМАЛЬНО возможное число экспериментов. У ученых при этом всего 2 предмета, но они абсолютно одинаковые. Каким образом этого можно достигнуть? Сколько экспериментов при этом максимально потребуется?
            </p>
            <h3>Pешение:</h3>
            <p>
                Самый оптимальный вариант решения выглядит так:
                Сбрасываем шар с высоты 100м, если не разбивается - сбрасывваем с высоты 100М+99м, потом 100+99+98,
                100+99+98+97, и тд. Таким образом, спустя 50 бросков  в конце получаем 4999.Если  на высоте 4999 шар  разбивается, дальше мы линейно поднимаемся по одному метру начиная с прошлой высоты - 4950.
                соответственно максимальное количество бросков при таком подходе будет 100.
            </p>
        </Container>
    )
}

export default Mental3
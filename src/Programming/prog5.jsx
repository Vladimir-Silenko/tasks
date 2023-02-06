import React from 'react'
import { Container } from '../Container'

const Prog5 = () => {

    let arr1 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
    let arr2 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
    function elements(arr1, arr2) {
        const obj = {}
        const result = [];
        let arr3 = [arr1, arr2].flat()
        arr3.forEach(item => {
            if (!(item in obj)) {
                obj[item] = 1
            }
            else {
                obj[item] += 1
            }
        })
        Object.keys(obj).map(key => {
            if (obj[key] >= 4) result.push(Number(key))
        })
        return result
    }
    console.log(elements(arr1, arr2))

    return (
        <Container>
            <h3>
                Задача 5
            </h3>
            <p>
                Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
                Пример:
                [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
                На выходе [1, 17]

            </p>

            <pre>{`
                            function elements(arr1, arr2) {
                                const obj = {}
                                const result = [];
                                let arr3 = [arr1, arr2].flat()
                                arr3.forEach(item => {
                                    if (!(item in obj)) {
                                        obj[item] = 1
                                    }
                                    else {
                                        obj[item] += 1
                                    }
                                })
                                Object.keys(obj).map(key => {
                                    if (obj[key] >= 4) result.push(Number(key))
                                })
                                return result
                            }
                        }
                `}</pre>
            <h4>
                Результат Работы функции можно посмотреть в консоли
            </h4>
        </Container>
    )
}

export default Prog5
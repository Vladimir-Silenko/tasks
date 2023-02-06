import React, { useState } from 'react'
import styled from "styled-components"
import { Container, PreStyle } from "../Container"

const Prog3 = () => {
    const [computers, setComputers] = useState(0)

    const getWordForm = (number) => {
        const lastTwoDigits = number % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return "компьютеров";
        }

        const lastDigit = number % 10;
        switch (lastDigit) {
            case 1:
                return "компьютер";
            case 2:
            case 3:
            case 4:
                return "компьютера";
            default:
                return "компьютеров";
        }
    }
    return (
        <Container>
            <h3>Задача 3</h3>
            <p>Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».</p>
            <pre style={PreStyle}>
                {`
                      const getWordForm = (number) => {
                        const lastTwoDigits = number % 100;
                        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
                            return "компьютеров";
                        }
                
                        const lastDigit = number % 10;
                        switch (lastDigit) {
                            case 1:
                                return "компьютер";
                            case 2:
                            case 3:
                            case 4:
                                return "компьютера";
                            default:
                                return "компьютеров";
                        }
                    }
                    `}
            </pre>
            <div>
                <p>Введите число</p>
                <input type="number" placeholder='enter number' style={{ width: '90px', }} onChange={(e) => { setComputers(e.target.value) }}
                />

            </div>
            <span>{computers} {getWordForm(computers)}</span>
        </Container>
    )
}

export default Prog3
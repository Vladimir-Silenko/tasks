import React, { useState } from 'react'
import styled from "styled-components"
import { Container } from "../Container"

const Div = styled(Container)`
    display:flex;
    flex-direction:column;
    border:none;
`
const Prog2 = () => {
    const [number, setNumber] = useState(0)
    const [result, setResult] = useState(0)

    const RoundNumber = (num) => {
        return Math.round(num / 5) * 5
    }

    return (
        <Container>
            <h3>
                Задача 2:
            </h3>
            <p>
                Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
                Пример:
                27 = 25, 27.8 = 30, 41.7 = 40.

            </p>
            <Div>
                <pre>
                    {`
                        const RoundNumber = (num) => {
                            return Math.round(num / 5) * 5
                        }
                    `}
                </pre>
                <div>
                    <div>
                        <input type="number" placeholder='enter number' style={{ width: '90px', }} onChange={(e) => { setNumber(e.target.value) }}
                        />
                        <button onClick={() => setResult(RoundNumber(number))}>try</button>
                    </div>
                    <div style={{ marginTop: '20px', fontSize: '24px' }}>
                        {result}
                    </div>
                </div>

            </Div>
        </Container>
    )
}

export default Prog2
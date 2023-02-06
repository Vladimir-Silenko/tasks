import React, { useState } from 'react'
import { Container, PreStyle } from '../Container'

const Prog4 = () => {
    const [number, setNumber] = useState(0)
    const [isSimple, setIssimmple] = useState(false)

    const simpleNumber = (num) => {

        let arr = []

        for (let i = 0; i < num; i++) {
            if (Number.isInteger(num / (i + 1))) {
                arr.push(i + 1)
            }
        }
        return arr.length === 2 ? 'true' : 'false'
    }

    return (
        <Container>
            <h3>Задача 4</h3>
            <p>Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).</p>
            <pre style={PreStyle}>
                {`
                      const simpleNumber = (num) => {

                        let arr = []
                
                        for (let i = 0; i < num; i++) {
                            if (Number.isInteger(num / (i + 1))) {
                                arr.push(i + 1)
                            }
                        }
                        return arr.length === 2 ? 'true' : 'false'
                    }
 `}
            </pre>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px ' }}>
                <input type="number" placeholder='enter number' style={{ width: '90px', }} onChange={(e) => { setNumber(e.target.value) }}
                />
                <button onClick={() => setIssimmple(simpleNumber(number))}>try</button>
            </div>
            <span>
                {isSimple}
            </span>
        </Container>
    )
}

export default Prog4
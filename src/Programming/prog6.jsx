
import { useMemo, useState } from 'react';
import { Container, PreStyle } from '../Container';

const Prog6 = () => {
    const [number, setNumber] = useState(0)
    const printMultiplicationTable = ((n) => {
        let maxLength = (n * n + '').length;
        for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
                let num = i * j;
                row += ' '.repeat(maxLength - (num + '').length) + num + ' ';
            }
            console.log(row);
        }
    })
    printMultiplicationTable(number)

    return (
        <Container>
            <h3>Задача 6:</h3>
            <p></p>
            <input type="number" placeholder='enter number' style={{ width: '90px', }} onChange={(e) => { setNumber(e.target.value) }}
            />
            <pre style={PreStyle}>
                {`
                        const printMultiplicationTable = (n) => {
                            let maxLength = (n * n + '').length;
                            for (let i = 1; i <= n; i++) {
                                let row = '';
                                for (let j = 1; j <= n; j++) {
                                    let num = i * j;
                                    row += ' '.repeat(maxLength - (num + '').length) + num + ' ';
                                }
                                console.log(row);
                            }
                        }
                `}
            </pre>
            <h4>Результат Работы функции можно посмотреть в консоли,введя число в инпут.</h4>
        </Container>
    )
}

export default Prog6
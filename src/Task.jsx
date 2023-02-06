import React from 'react'
const Container = styled.div`
    width:80%;
    display:flex;
`

const Task = ({ theTask, answer }) => {
    return (
        <Container>
            <div>
                <h2>
                    Задача
                </h2>
                <p>{theTask}</p>
            </div>
            <div>
                <h2>
                    Ответ
                </h2>
                <p>{answer}</p>
            </div>

        </Container>
    )
}

export default Task
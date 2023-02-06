import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    height:40px;
`
const StyledNav = styled.div`
    width:50%;
    height:100%;
    color:white;
    background: rgb(11,98,27);
    background: linear-gradient(0deg, rgba(11,98,27,1) 0%, rgba(163,214,163,1) 49%, rgba(0,116,24,1) 100%);;
    border:1px solid silver;
    :hover{
        background: #0f5020;;
    }
`
const style = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '24px',
    minWidth: '100%'
}
const Header = () => {
    return (
        <Container>
            <StyledNav><NavLink style={style} to="mental_tasks">Задачи на сообразительность</NavLink></StyledNav>
            <StyledNav> <NavLink style={style} to="programming_tasks">задачи по программированию</NavLink></StyledNav>
        </Container>
    )
}

export default Header
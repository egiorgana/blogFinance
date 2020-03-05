import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainContainer><h1>Welcome!!</h1></MainContainer>
    )
}

const MainContainer  = styled.header`
    background: url(../../images/header.jpg) no-repeat center/cover;
    height: 25rem;

    h1{
        transform: translate(-50%, -50%);
        color: #fff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    }
`

export default Header
import React from 'react';
import styled, { css } from 'styled-components'
import auth_pic from '../img/auth_pic.png'

const Form = styled.form`
    position: absolute;
    margin-left: 1045px;

    ${props => props.second_form && css`
      margin-left: 1330px;
    `}
`
const Name_field = styled.p`
    text-align: left;
    font-family: TT Commons;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
`

const Input = styled.input`
    width: 530px;
    height: 40px;
`

const Title = styled.p`
    position: relative;
    font-family: TT Commons;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    color: #5DB6DE;
    padding-right: 265px;
    padding-top: 200px;

`

const Button = styled.button`
    position: relative;
    top: 300px;
    background: #5DB6DE;
    border-radius: 3px;
    border: 2px solid #5DB6DE;
    color: white;
    width: 250px;
    height: 60px;
    font-family: TT Commons;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    margin: 0.25em 1em;
    

    ${props => props.notAuth && css`
      background: white;
      color: #5DB6DE;
    `}
`;

const BgImage = styled.div`
    position: absolute;
    background: url(${auth_pic});
    width: 850px;
    height: 850px;
    text-align: center;
    margin-left: 100px;

`
const Input_Con = styled.div`
    position: absolute;
    padding-left: 1078px;
`

const Container = styled.div`
  text-align: right;
  margin-right: 250px;
  
`

export const AuthPage = () => {
    return(
        <Container>
            <BgImage/>
            <Title>АВТОРИЗАЦИЯ</Title>
                <Input_Con>
                    <Name_field>Почта</Name_field>
                    <Input/>
                    <Name_field>Пароль</Name_field>
                    <Input/>
                </Input_Con>
                <Form action="/account"><Button>ВОЙТИ</Button></Form>
                <Form second_form action="/register"><Button notAuth>РЕГИСТРАЦИЯ</Button></Form>
        </Container>
    )
}
  
import React from 'react';
import styled, { css } from 'styled-components'

const Form = styled.form`
    position: absolute;
    margin-left: 5px;

    ${props => props.second_form && css`
      margin-left: 295px;
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
    ${props => props.about && css`
      height: 150px;
    `}
`

const Title = styled.p`
    position: relative;
    font-family: TT Commons;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    color: #5DB6DE;
    padding-top: 150px;
    padding-left: 25px;

`

const Button = styled.button`
    position: relative;
    top: 400px;
    background: #5DB6DE;
    border-radius: 3px;
    border: 2px solid #5DB6DE;
    color: white;
    width: 250px;
    height: 60px;
    font-family: TT Commons;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin: 0.25em 1em;
    

    ${props => props.notAuth && css`
      background: white;
      color: #5DB6DE;
    `}
`;


const Input_Con = styled.div`
    position: absolute;
    padding-left: 25px;
    ${props => props.second_input_con && css`
      padding-left: 750px;
    `}
`

const Container = styled.div`
  text-align: left;
  margin-left: 300px;
  
`

export const Register = () => {
    return(
        <Container>
            <Title>РЕГИСТРАЦИЯ</Title>
            <form name="auth" action="/account">
                <Input_Con>
                    <Name_field>Имя</Name_field>
                    <Input/>
                    <Name_field>Фамилия</Name_field>
                    <Input/>
                    <Name_field>Почта</Name_field>
                    <Input/>
                </Input_Con>
                <Input_Con second_input_con>
                    <Name_field>Город</Name_field>
                    <Input/>
                    <Name_field>О себе:</Name_field>
                    <Input about/>
                </Input_Con>
                <Form action="/account"><Button>ЗАРЕГЕСТРИРОВАТЬСЯ</Button></Form>
                <Form second_form action="/login"><Button notAuth>НАЗАД</Button></Form>
            </form>
        </Container>
    )
}
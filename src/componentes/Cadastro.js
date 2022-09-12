import { useState, useContext  } from "react"
import { Link,useNavigate, useParams} from "react-router-dom"
import styled from "styled-components"
import Form from "./common/Form"
import {Button, ButtonFacke} from '../componentes/common/Button'
import { postCadastro } from "../services/MyWallet"



export default function Cadastro(){

    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)

    const { cadastro } = useParams()

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        name: '',
        password:'',
        confirmPassword:''
    })

    function handleForm(e){
        e.preventDefault()
        console.log(e.target.name, e.target.value )
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    function sendForm(e) {

        e.preventDefault()
        const body ={
            ...form
        }

        setLoading(true)
        setDesibled(true)

        console.log(body.image)

        

        postCadastro(body).catch(({response}) => {
        alert(response.data.message);
        setLoading(false);
        setDesibled(false)})

        postCadastro(body).then(res => {console.log('deu bom', res); navigate('/');setForm({ 
        email: '',
        name: '',
        password:'',
        confirmPassword:''})})

        
    }


    return (
        <Wrapper>
            <LogoTop>
                 MyWallet
            </LogoTop>
             <Form onSubmit={sendForm}>
               
             <input
                id='forName'
                onChange={handleForm}
                type='text'
                name='name'
                value={form.name}
                placeholder='Nome'
                disabled={disabled}
                required/>
               
                <input
                id='forEmail'
                onChange={handleForm}
                type='email'
                name='email'
                value={form.email}
                placeholder='E-mail'
                disabled={disabled}
                required/>
                
                <input
                id='forpassword'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.password}
                placeholder='Senha'
                disabled={disabled}
                required/>

                <input
                id='for confirmPimage'
                onChange={handleForm}
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                placeholder='Confirme a senha'
                disabled={disabled}
                required/>

               <Button type='submit'>Entrar</Button>

             </Form>

             <Link to={`/cadastro`}>
                 <RodaPe>Não tem uma conta? Cadastre-se!</RodaPe>
             </Link>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    input{
        font-family: 'Raleway', sans-serif;
    }

    
   
 `

const LogoTop = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
`


const RodaPe = styled.h3`
   font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-top:36px;
    color: #ffffff;


`
        

        
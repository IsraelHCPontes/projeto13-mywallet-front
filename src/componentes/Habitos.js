import { useState, useContext, useEffect  } from "react"
import { Link,useNavigate, useParams} from "react-router-dom"
import styled from "styled-components"
import iconOut from "../Assets/img/Vector.svg"
import iconMinus from "../Assets/img/ant-design_minus-circle-outlined.svg"
import iconPlus from "../Assets/img/ant-design_plus-circle-outlined.svg"
import { getListarHabitos } from "../services/MyWallet" 


export default function Habitos(){
    const { habitos } =  useParams()
    const [listaHabitos, setListaHabitos] = useState([])

    useEffect(() => {
        getListarHabitos().then((res)=>
        {setListaHabitos([...res.data]);
            
        })},[])  

   

    return(
        <Wrapper>
            <Top>
                <Text>Olá, Fulano</Text>
                 <img src ={iconOut}/> 
            </Top>
            <Container>
                {listaHabitos.map(({title ,valor, data}) => 
                 <Movimetos>
                    <Esquerda>
                        <Data>{data}</Data>
                        <Titulo>{title}</Titulo>
                    </Esquerda>
                    <Valor>{valor}</Valor>
                 </Movimetos>
                )}
                <Saldo>
                    <TextSaldo>SALDO</TextSaldo>
                    <ValorSaldo>1000</ValorSaldo>

                </Saldo>
             </Container>
            <Footer>
                <NewInto>
                    <Plus src ={iconPlus}/>
                    <TextPlus>Nova entrada</TextPlus>
                </NewInto>
                <NewOut>
                    <Out src ={iconMinus}/>
                    <TextMinus>Nova entrada</TextMinus>
                </NewOut>
                
            </Footer>
        </Wrapper> 
    )
}



const Wrapper = styled.div`
   margin-top: 70px;
    width: 326px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;

  img{
    width: 24px;
    height: 24px;
  }

`
const Text = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
`

const Container = styled.div`
    margin-top: 25px;
    height: 446px;
    width: 326px;
    padding-top: 20px;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    position: relative;
`
 
const TexoBase = styled.h1`

    width:180px;
    height:46px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #868686;
    position:absolute;
    left: 22.5%;
    top: 43.5%;
    
`

const Footer = styled.div`
    width: 100%;
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
`
const NewInto = styled.button`
    height: 114px;
    width: 155px;
    border:none;
    border-radius: 5px;
    background-color: #A328D6;
    position: relative;
`


const NewOut = styled.button`
    height: 114px;
    width: 155px;
    border:none;
    border-radius: 5px;
    background-color: #A328D6;
    position: relative;

`

const Plus = styled.img`
     top: 9px;
     left: 8px;
     position: absolute;

`

 const Out = styled.img`
     top: 9px;
     left: 8px;
     position: absolute;

 `
 const TextPlus = styled.h1`
    height: 40px;
    width: 64px;
    left: 8px;
    bottom: 9px;
    position: absolute;



    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
 `


const TextMinus =styled.h1`
    height: 40px;
    width: 64px;
    left: 8px;
    bottom: 9px;
    position: absolute;



    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

`

const Movimetos = styled.div`
    width: 313px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;

`

const Esquerda = styled.div`
    display:flex;
`

const Titulo = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
`

const Valor = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: right;
    color: #03AC00;
`

const Data= styled.h3`
    font-family: 'Raleway', sans-serif;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #C6C6C6;
`

const Saldo = styled.div`
    width: 313px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    left: 9px;
    
`

const TextSaldo = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;     
`


const ValorSaldo = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    margin-right: 9px;
    color: #03AC00;
`
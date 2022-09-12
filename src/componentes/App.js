import GlobalStyle from "../Assets/styles/GlobalStyles"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import { BrowserRouter ,Routes ,Route ,useNavigate  } from "react-router-dom"
import PrivatePage from "./PrivatePage"
import UserProvider from "../contexts/UserContext"


export default function App(){
    return (
        <BrowserRouter>
          <GlobalStyle/>
            <UserProvider>
              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/> 
                <Route path="/habitos" element={ <Habitos/>}/> 
                {/* <Route path="/novaentrada" element={ <NovaEntrada/>}/>  */}
                {/* <Route path="/hoje" element={<PrivatePage><Hoje/></PrivatePage>}/>
                <Route path="/historico" element={<PrivatePage><Historico/></PrivatePage>}/> */}
              </Routes>
           </UserProvider>
        </BrowserRouter>
    )
}
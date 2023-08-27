import {SignInConatiner, Img, Div, Title, P, Button, Cadastro, DivInput, Input} from  './signIn.jsx'
import Logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

function signIn() {
    return( 
        <SignInConatiner>
            <Img src={Logo}/>
            <Div>
                <Title>MobiUS</Title>
            </Div>

            <DivInput>
                <Input placeholder='Nome do usuário'></Input>

                <Input placeholder='Senha'></Input>
                <P>Esqueseu sua senha?</P>


                <Link to='/search'><Button>Entrar</Button></Link>


                <Cadastro>Ainda não possui conta?</Cadastro>
            </DivInput>
        </SignInConatiner>
    )
}

export default signIn;
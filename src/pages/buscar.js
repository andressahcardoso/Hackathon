import {Fundo, Profile, Header, Image, Logotipo, DivBtn, ImgIcon, Button, Text, DivButtons, Campos} from './buscarStyled'
import Unidade from '../assets/hospital.png'
import Logo from '../assets/logo2.png'
import pesquisar from '../assets/pesquisar.svg'
import usuario from '../assets/user.svg'
import medicamentos from '../assets/pilulas.svg'
import agendar from '../assets/calendary.svg'
import { Link } from 'react-router-dom';

function Search() {
    return(
        <>
        <Fundo>
            <Header>
                <Logotipo src={Logo}/>
                <Profile src={usuario}/>
            </Header>
            <Campos>
            <DivBtn>
                <Image src={Unidade}/>
            </DivBtn>
            <DivButtons>
                <DivBtn>
                    <Button>
                        <ImgIcon src={pesquisar}/>
                        <Link to='/searchUnits'><Text>Buscar Unidade</Text></Link>
                    </Button>
                </DivBtn>
                <DivBtn>
                    <Button>
                        <ImgIcon src={agendar}/>
                        <Text>Agendas Consultas</Text>
                    </Button>
                </DivBtn>
                <DivBtn>
                    <Button>
                        <ImgIcon src={medicamentos}/>
                        <Text>Medicamentos</Text>
                    </Button>
                </DivBtn>
            </DivButtons>

           </Campos>
        </Fundo>
        </>
    )
}; 

export default Search; 
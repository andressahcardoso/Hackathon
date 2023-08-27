import { Fundo, Header, Selecionar, Icons, DivButtons, DivBtn, Button, Text, Button2 } from "./styledHome";
import medicine from '../../assets/medicine.svg'
import paciente from '../../assets/paciente.svg'
import driver from '../../assets/driver.svg'


import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
            <Fundo>
                <Header>
                    Selecione um papel
                </Header>
                <Selecionar>
                    <DivButtons>
                       <DivBtn>
                            <Button2>
                                <Icons src={medicine}/>
                            </Button2>
                            <Link to='/signIn'>Buscar Unidade</Link>
                        </DivBtn>
                        <DivBtn>
                            <Button>
                                <Icons src={paciente}/>
                            </Button>
                            Paciente
                        </DivBtn>
                        <DivBtn>
                            <Button>
                                <Icons src={driver}/>
                            </Button>
                            Motorista
                        </DivBtn>
                    </DivButtons>
                </Selecionar>
            </Fundo>
        </>
    )
}; 

export default Home; 
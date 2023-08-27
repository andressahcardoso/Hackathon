import {UnitsContainer, Header, ImgContainer, Informations, Text, SubText, Line, TextP, Div, ImgIcon, P, DivButton,PButton, DivButtons,DivBtn, DivButtonBig } from './Units.jsx'
// import Back from '../../assets/back.svg'

import { MdArrowBackIosNew } from "react-icons/md";
import location from '../../assets/location.svg'
import vacine from '../../assets/vacine.svg'
import clock from '../../assets/clock.svg'
import calendary from '../../assets/calendary.svg'
import rotas from '../../assets/rotas.svg'
import ligar from '../../assets/ligar.svg'
// import voltar from '../../assets/return.svg'

import { Link } from 'react-router-dom';

function Units() {
    return(
        <UnitsContainer>
            <Header>
                <Link to='/searchUnits'><MdArrowBackIosNew/></Link>
                <Text>Unidades</Text>
            </Header>
            <ImgContainer>
                
            </ImgContainer>
            <Informations>
                <SubText>UBS Cohab Feitoria</SubText>
                <Line></Line>
                <Div>
                    <ImgIcon src={location}/>
                    <TextP>R. Mali, 57 - Feitoria, São Leopoldo - RS, 93054-410</TextP>
                </Div>
                <Div>
                    <ImgIcon src={vacine}/>
                    <TextP>Nenhuma campanha</TextP>
                </Div>
                <Div>
                    <ImgIcon src={clock}/>
                    <TextP>8:00 - 18:00</TextP>
                </Div>
                <P>Saiba mais!</P>

                <DivButtons>
                    <DivBtn>
                        <DivButton>
                            <ImgIcon src={calendary}/>
                            <PButton>Agendar</PButton>
                        </DivButton>
                    </DivBtn>

                    <DivBtn>
                        <DivButton>
                            <ImgIcon src={rotas}/>
                            <PButton>Rotas</PButton>
                        </DivButton>
                    </DivBtn>
                </DivButtons>

                <DivButtonBig>
                            <ImgIcon src={ligar}/>
                            <PButton>Ligar</PButton>
                    </DivButtonBig>

            </Informations>
        </UnitsContainer>
    )
}

export default Units;
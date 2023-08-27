import {UnitsContainer, Header, ImgContainer, Informations, Text, P, SubText, Input, Imgsearch, divIn} from './search.jsx'
// import Back from '../../assets/back.svg'

import { MdArrowBackIosNew } from "react-icons/md";
// import voltar from '../../assets/return.svg'
import { Link } from 'react-router-dom';
import searchIn from '../../assets/search.svg'
import search from '../../assets/search.svg'

function Units() {
    return(
        <UnitsContainer>
            <Header>
                <Link to='/search'><MdArrowBackIosNew/></Link>
                <Text>Unidades</Text>
            </Header>
            <ImgContainer>
                <P>Qual unidade devo consultar?</P>
                <SubText>Informe seu endereço completo</SubText>
                <divIn>
                    <Input type='search'>
                    </Input>
                    <Link to='/Units'><Imgsearch src={searchIn}/></Link>
                </divIn>
            </ImgContainer>
            
            <Informations>
                <Link to='/Units'></Link>
            </Informations>
        </UnitsContainer>
    )
}

export default Units;
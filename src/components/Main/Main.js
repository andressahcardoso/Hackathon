import {MainContainer, Img, Div, Title} from "./MainStyle";
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

function Main() {
    return (
        <Link to='/person'>
            <MainContainer>
                <Img src={Logo}/>
                <Div>
                    <Title>MobiUS</Title>
                </Div>
            </MainContainer>  
        </Link>
    )
}

export default Main;
import {Azul, Icone} from './styles'
import pesquisar from '../assets/pesquisar.svg'

function BotaoAzul({CTA}) {
    return(
        <>
            <Azul>
                <Icone src={pesquisar}/>
                {CTA}
            </Azul>
        </>
    )
};

export default BotaoAzul; 
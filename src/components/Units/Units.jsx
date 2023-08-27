import styled from "styled-components";
import postoImg from '../../assets/unidade.png'

export const UnitsContainer = styled.section`
    display: grid;
    grid-template-rows: 10vh 35vh 60vh;
    grid-template-areas: 'Header'
                        'ImgContainer'
                        'Informations';        
    background-color: white;
`
// export const Retornar = styled.image`
//     align-items: center;
//     width: 10vw;
//     height: 10vh;
//     backgorund: 7F7C78;
//     border-radius: 60px;
//     border: none;
// `

export const Header = styled.div`
    grid-area: Header;
    box-shadow: 10px 5px 5px black;
    display: flex;
    align-content: center;
    justify-content: space-bettwen;
    flex-wrap: wrap;
    padding-left: 6vw;
    padding-top: 3vh;

`

export const ImgContainer = styled.div`
    grid-area: ImgContainer;
    background-color: pink;
    background-size: contain;
    background:url(${postoImg}); 
`

export const Informations = styled.div`
    grid-area: Informations;
    background-color: white;
    border-radius: 50px 50px 0px 0px;
    margin-top: -8vh;
    border-top: 3px solid #7F7C78;
`

export const BackImg = styled.div`
    height: 100vh;
`

export const Text = styled.p`
    margin-left: 4vw;
    margin-top: -0.2vh;
    font-size: 20px;
`

export const SubText = styled.div`
    margin: 8vw;
    font-size: 20px;
`

export const Line = styled.div`
    border-bottom: 3px solid #4EBDAA;
    width: 50vw;
    margin-left: 7vw;
    margin-top: -2vh;
    margin-bottom: 4vh;
`

export const TextP = styled.p`
    margin-left: 3vw;
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 6vw;
    padding-right: 6vw;
    margin-top: -2vh;
`

export const DivBtn = styled.div`
    width: 40vw;
` 


export const ImgIcon = styled.img`
    width: 20px;
`

export const P = styled.p`
    padding-left: 6vw;
    color: #46B5A2;
    margin-bottom: 5vh;
`

export const DivButton = styled.div`
    background-color: #46B5A2;
    color: white;
    border-radius: 50px;
    width: 35vw;
    height: 8vw;
    display: flex;
    flex-direction: row;
    padding: 2vh;
    justify-content: center;
`

export const PButton = styled.p`
    padding-left: 3vw;
    margin-top: 0.8vh;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-left: 6vw;
    gap: 5vw;
`

export const DivButtonBig = styled.div`
    margin-left: 6vw;
    margin-top: 2vh;
    background-color: #46B5A2;
    color: white;
    border-radius: 50px;
    width: 80vw;
    height: 8vw;
    display: flex;
    flex-direction: row;
    padding: 2vh;
    justify-content: center;
`
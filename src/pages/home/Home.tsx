import Banner from "./components/banner/Banner"
import InfoBar from "./components/info-bar/InfoBar"
import CardsWrapper from "./components/cards-wrapper/CardsWrapper"
import Footer from "./components/footer/Footer"
// import SwitchThemeBtn from "./components/switch-theme-btn/SwitchThemeBtn"
import { useState } from "react"
import styled from "styled-components"

interface SwitchThemeBtnProps {
    darkTheme: boolean
}

const SwitchThemeBtnStyles = styled.button<SwitchThemeBtnProps>`
    background-color: ${props => props.darkTheme ? 'rgb(43, 56, 91)' : '#b1570e'};
    padding: 5px 10px;
    color: #fafafa;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #22222275;
    position: absolute;
    right: 30px;
    top:30px;
    cursor: pointer;
`

const Home = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const HandleClick = () => {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true)
    }

    return (
        <>
            <SwitchThemeBtnStyles onClick={HandleClick} darkTheme={darkTheme}>
                Alterar tema
            </SwitchThemeBtnStyles>

            <Banner
                text='Minha primeira página em React.'
                darkTheme={darkTheme}
            />

            <InfoBar darkTheme={darkTheme} />

            <CardsWrapper darkTheme={darkTheme} />

            <Banner
                text='Contato'
                darkTheme={darkTheme}
            />

            <Footer
                darkTheme={darkTheme}
            />
        </>
    )
}

export default Home
import styled from "styled-components"

const SwitchThemeBtnStyles = styled.button`
    background-color: #E16E0E;
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

const SwitchThemeBtn = () => {
    return (
        <SwitchThemeBtnStyles>
            Alterar tema
        </SwitchThemeBtnStyles>
    )
}

export default SwitchThemeBtn
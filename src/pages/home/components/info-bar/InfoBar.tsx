import styled from "styled-components";

interface InfoBarProps {
    darkTheme: boolean
}

const InfoBarStyles = styled.div<InfoBarProps>`
    height: 200px;
    width: 100%;

    background-color: ${props => props.darkTheme ? 'rgb(43, 56, 91)' : '#b1570e'};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    text-align: center;

    .info__icon {
        font-size: 48px;
        color: ${props => props.darkTheme ? '#E16E0E' : 'rgb(43, 56, 91)'};
        text-shadow: 4px 4px 2px #00000050;
    }

    .info__title {
        font-size: 20px;
        color: ${props => props.darkTheme ? '#fafafa' : '#dcdcdc'};
    }
    
    .info__text {
        font-size: 16px;
        color: ${props => props.darkTheme ? '#fafafa' : '#dcdcdc'};
    }
`

const InfoBar = (props: InfoBarProps) => {
    return (
        <InfoBarStyles darkTheme={props.darkTheme}>
            <div>
                <i className="far fa-desktop info__icon"></i>

                <h3 className="info__title">
                    Somente para desktop
                </h3>

                <p className="info__text">
                    Vamos aprender como utilizar uma biblioteca.
                </p>
            </div>

            <div>
                <i className="far fa-layer-group info__icon"></i>

                <h3 className="info__title">
                    Criado com componentes
                </h3>

                <p className="info__text">
                    Utilizamos o Styled Components.
                </p>
            </div>

            <div>
                <i className="far fa-check-circle info__icon"></i>

                <h3 className="info__title">
                    Fácil aproveitamento
                </h3>

                <p className="info__text">
                    Estamos no caminho.
                </p>
            </div>
        </InfoBarStyles>
    )
}

export default InfoBar
import styled from "styled-components"

interface FooterProps {
    darkTheme: boolean
}

const FooterStyles = styled.div<FooterProps>`
    height: 200px;
    width: 100%;

    background-color: ${props => props.darkTheme ? 'rgb(43, 56, 91)' : '#b1570e'};

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .footer__text-wrapper {
        margin-left: 30px;
    }

    .footer__link-text {
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.darkTheme ? '#fafafa' : '#dcdcdc'};
        text-shadow: 4px 4px 2px #00000050;

        margin-right: 30px;
    }

    .footer__link-text:hover {
        cursor: pointer;
    }

    .footer__text {
        font-size: 14px;
        color: #dcdcdc;
    }

    .footer__icons-wrapper {
        justify-self: end;
        margin-right: 30px;
    }

    .footer__icon {
        font-size: 32px;
        color: ${props => props.darkTheme ? '#E16E0E' : 'rgb(43, 56, 91)'};
        text-shadow: 4px 4px 2px #00000050;

        margin-right: 30px
    }

    .footer__icon:hover {
        cursor: pointer;
    }
`

const Footer = (props: FooterProps) => {
    return (
        <FooterStyles darkTheme={props.darkTheme}>
            <div className="footer__text-wrapper">
                <p>
                    <span className="footer__link-text">
                        About
                    </span>

                    <span className="footer__link-text">
                        Contact
                    </span>

                    <span className="footer__link-text">
                        Terms of Use
                    </span>

                    <span className="footer__link-text">
                        Privacy Policy
                    </span>
                </p>

                <p className="footer__text">
                    &copy; Your Website 2022. All Rights Reserved.
                </p>
            </div>

            <div className="footer__icons-wrapper">
                <i className="fab fa-facebook-square footer__icon" />

                <i className="fab fa-twitter-square footer__icon" />

                <i className="fab fa-instagram footer__icon" />
            </div>
        </FooterStyles>
    )
}

export default Footer
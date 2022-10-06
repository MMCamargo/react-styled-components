import styled from "styled-components"

interface ImgCardProps {
    children: any,
    darkTheme: boolean
}

const ImgCardStyles = styled.div<ImgCardProps>`
    opacity: ${props => props.darkTheme ? '1' : '0.7'};

    img {
        height: 100%;
        width: 100%;
    }
`

const ImgCard = ({ children, darkTheme }: ImgCardProps) => {
    return (
        <ImgCardStyles darkTheme={darkTheme}>
            {children}
        </ImgCardStyles>
    )
}

export default ImgCard
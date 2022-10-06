import styled from "styled-components";

interface BannerProps {
    text?: string,
    darkTheme?: boolean
}


const BannerStyles = styled.div<BannerProps>`
    height: 200px;
    width: 100%;

    background-color: ${props => props.darkTheme ? 'rgb(0, 18, 49)' : '#222'};
    
    display: flex;
    align-items: center;
    justify-content: center;

    .banner__text {
        font-size: 24px;
        font-weight: bold;
        
        color: ${props => props.darkTheme ? '#fafafa' : '#dcdcdc'};
        text-shadow: 4px 4px 2px #00000075;
    }
`

const Banner = (props: BannerProps) => {
    return (
        <BannerStyles darkTheme={props.darkTheme}>
            <p className="banner__text">
                {props.text}
            </p>
        </BannerStyles>
    )
}

export default Banner
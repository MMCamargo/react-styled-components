import styled from "styled-components";
import TextCard from "../cards/TextCard"
import ImgCard from "../cards/ImgCard"

const CardsWrapperStyles = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 400px 400px;
`

interface CardsWrapperProps {
    darkTheme: boolean
}

const CardsWrapper = (props: CardsWrapperProps) => {
    return (
        <CardsWrapperStyles>
            <TextCard darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    JavaScript
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, tempora mollitia. Atque, eos repellendus. Deserunt nam minus qui autem porro rem ex eos, voluptatum expedita et recusandae aliquid repellendus possimus?
                </p>
            </TextCard>

            <ImgCard darkTheme={props.darkTheme}>
                <img src="https://static.imasters.com.br/wp-content/uploads/2019/06/06110736/JavaScript3.jpg" alt="" />
            </ImgCard>

            <ImgCard darkTheme={props.darkTheme}>
                <img src="https://miro.medium.com/max/770/1*_0hv8sVaPFCiUebHRpzyCQ.png" alt="" />
            </ImgCard>

            <TextCard darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    TypeScript
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos velit voluptas qui, nostrum quasi ipsam quaerat nam fuga architecto eaque quibusdam. Unde quod provident debitis a possimus, explicabo recusandae odio.
                </p>
            </TextCard>

            <TextCard darkTheme={props.darkTheme}>
                <h1 className="text-card__title">
                    React.js
                </h1>

                <p className="text-card__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione consectetur reprehenderit quisquam quae itaque similique repellat dolorum doloremque magnam veritatis rem, nihil, nesciunt expedita quas! Blanditiis expedita quibusdam laboriosam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi et. Mollitia itaque debitis nulla reiciendis? Officiis et at exercitationem doloribus, neque consequuntur reiciendis blanditiis velit magnam vel sequi cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam eaque error possimus. Labore nemo ratione cum incidunt voluptas veritatis? Iusto quae non nulla quos est quis minus nemo illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi quaerat voluptatibus voluptatem eum eligendi aspernatur ipsam voluptate odio corrupti maiores, dolores molestias, sint repellat veniam vitae? Odio, pariatur accusantium?
                </p>
            </TextCard>

            <ImgCard darkTheme={props.darkTheme}>
                <img src="https://auditeste.com.br/wp-content/uploads/2021/02/react.jpg" alt="" />
            </ImgCard>
        </CardsWrapperStyles>
    )
}

export default CardsWrapper
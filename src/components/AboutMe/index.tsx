import { Container, Content, Text } from "./style"
import Ber from "../../assets/ber.jpg"

export const AboutMe = () => {

    return (
        <Container>
            <h2>Quem sou eu?</h2>
            <Content>
                <img src={Ber} alt="Bernardo Costa" />
                <Text>
                    <p>O sentido que dei pra minha vida é criar e o conhecimento é o substrato. O que eu mais amo é aprender e aplicar meus conhecimentos em criações.</p>
                    <p>A tecnologia é um dos melhores meios que encontrei de cumprir o meu objetivo. Hoje, como desenvolvedor <i>full-stack</i>, com foco no <b><i>back-end</i></b>.</p>
                    <p>Crio soluções e desenvolvo ideias que procuro cuidar muito bem desde o planejamento ao desenvolvimento.</p>
                </Text>
            </Content>
        </Container>
    )
}
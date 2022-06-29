import { Container, Content, Text } from "./style"
import Ber from "../../assets/ber.jpg"

export const AboutMe = () => {

    return (
        <Container>
            <h2>Quem sou eu?</h2>
            <Content>
                <img src={Ber} />
                <Text>
                    <p>O sentido da minha vida é criar e o conhecimento é o substrato. </p>
                    <p>A tecnologia é um dos melhores meios que encontrei de aprender e criar.</p>
                    <p>Crio soluções, desenvolvo ideias e cuido delas.</p>
                </Text>
            </Content>
        </Container>
    )
}
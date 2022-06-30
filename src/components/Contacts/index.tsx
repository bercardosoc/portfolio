import { Container, Content } from "./style"
import Gmail from "../../assets/gmail.png"
import Github from "../../assets/gitdoodle.png"
import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"

export const Contacts = () => {

    return (
        <Container>
            <h2>Onde me encontrar?</h2>
            <Content>
                <a target="_blank" href="mailto:bernardocardosodacosta@gmail.com?subject=Mail" >
                    <img src={Gmail} />
                </a>

                <a href="https://github.com/bercardosoc" target="_blank" >
                    <img src={Github} />
                </a>

                <a href="https://www.linkedin.com/in/bernardo-c-costa/" target="_blank" >
                    <img src={Linkedin} />
                </a>

                <a href="https://twitter.com/berCostaDev" target="_blank" >
                    <img src={Twitter} />
                </a>
            </Content>
        </Container>
    )
}
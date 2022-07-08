import { Box, Container, Content } from "./style"
import Gmail from "../../assets/gmail.png"
import Github from "../../assets/gitdoodle.png"
import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"

export const Contacts = () => {

    return (
        <Container id="contacts" >
            <h2>Onde me encontrar?</h2>
            <Content>
                <Box>
                    <a target="_blank" href="mailto:bernardocardosodacosta@gmail.com?subject=Mail" >
                        <img src={Gmail} />
                    </a>
                    <span>bernardocardosodacosta</span>
                    <span>@gmail.com</span>
                </Box>

                <Box>
                <a href="https://github.com/bercardosoc" target="_blank" >
                    <img src={Github} />
                </a>
                <span>bercardosoc</span>
                </Box>

                <Box>
                <a href="https://www.linkedin.com/in/bernardo-c-costa/" target="_blank" >
                    <img src={Linkedin} />
                </a>
                <span>Bernardo Costa</span>
                </Box>

                <Box>
                <a href="https://twitter.com/thehermitcoder" target="_blank" >
                    <img src={Twitter} />
                </a>
                <span>@thehermitcoder</span>
                </Box>
            </Content>
        </Container>
    )
}
import { useState } from "react"
import { Container, Content } from "./styles"
import Burger from "../../assets/hamburguer.png"

export const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const handleToggle = () => {
        setNavBarOpen(!navBarOpen)
      }

    let width = window.innerWidth

    return (
        <Container>
            <h1>Bernardo Costa</h1>
            {
                width < 768 ? (
                    <img 
                        src={Burger}
                        onClick={handleToggle}
                    />
                ) : (
                    <Content>
                        <a href="#">Tecnologias</a>
                        <a href="#">Projetos</a>
                        <a href="#">Contato</a>
                    </Content>
                )
            }
        </Container>
    )
}
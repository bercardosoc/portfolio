import { useState } from "react"
import { Container, Content, Title } from "./styles"
import Burger from "../../assets/hamburguer.png"
import { MdClose } from "react-icons/md"

export const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const handleToggle = () => {
        setNavBarOpen(!navBarOpen)
      }

    const unhandleToggle = () => {
      setNavBarOpen(false)
    }

    let width = window.innerWidth

    return (
        <Container>
            {
                width < 768 ? (
                    <Title>
                        <h1>Bernardo</h1> 
                        <h1>Costa</h1>
                    </Title>
                ) : (
                    <h1>Bernardo Costa</h1>
                )
            }

            {
                width < 768 && !navBarOpen ? (
                    <img 
                        src={Burger}
                        alt= "Burger bar"
                        onClick={handleToggle}
                    />
                    ) : ( 
                        <Content>
                        <button onClick={unhandleToggle}> <MdClose/> </button>
                        <a href="#myTechs">Tecnologias</a>
                        <a href="#myProjects">Projetos</a>
                        <a href="#contacts">Contato</a>
                    </Content>
                )
            }
        </Container>
    )
}
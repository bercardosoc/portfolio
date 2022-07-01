import { useState } from "react"
import { Container, Content } from "./styles"
import Burger from "../../assets/hamburguer.png"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const handleToggle = () => {
        setNavBarOpen(!navBarOpen)
      }

    const unhandleToggle = () => {
      setNavBarOpen(true)
    }

    let width = window.innerWidth

    return (
        <Container>
            <h1>Bernardo Costa</h1>
            {/* {navBarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} /> ) : (  
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )} */}
            {
                width < 768 && navBarOpen ? (
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
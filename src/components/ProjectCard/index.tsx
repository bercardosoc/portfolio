import Github from "../../assets/github.png"
import { Box, Container } from "./style"

export const ProjectCard = ({title, link, description, techs}: any) => {
    
    return (
        <Container>
            <Box>
                <h3>{title}</h3> 
                <a href={link} target="blank" >
                    <img src={Github} alt="Github"/>
                </a>
            </Box>
            <p>{description}</p>
            <h4>Stacks</h4>
            <p>{techs}</p>
        </Container>
    )
}
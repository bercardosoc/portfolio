import { ProjectCard } from "../ProjectCard"
import { Container, Content } from "./style"

export const GroupProjects = () => {
    return (
        <Container>
            <h2>Meus principais projetos</h2>
            <Content>
            <ProjectCard 
                    link={"https://github.com/lcsreiser/pollutants-recycling"} 
                    title={"Poullutants recyling"} 
                    description={"Back-end de uma aplicação onde você pode encontrar os pontos de reciclagem mais próximos da sua casa de acordo com a categoria do que você deseja descartar. "} 
                    techs={"Node + TypeScript; Google Maps API; Type ORM; Postgresql"}
            />

            <ProjectCard 
                    link={"https://github.com/guztavo-oliveira/capstone-q3-find-my-recipes"} 
                    title={"Find Recipes - API"} 
                    description={"Back-end de uma aplicação onde você pode encontrar os receitas a partir dos ingredientes que você tem na dispensa, podendo também, cadastrar as suas próprias receitas ou encontrar todas elas, seja por categoria, tempo ou porção."} 
                    techs={"Flask + Python; SQL Alchemy; Postgresql"}
            />

            <ProjectCard 
                    link={"https://github.com/lcsreiser/pollutants-recycling"} 
                    title={"Find Recipes - Front"} 
                    description={"Front-end da aplicação onde você pode encontrar os receitas a partir dos ingredientes que você tem na dispensa, podendo também encontrar todas elas, seja por categoria, tempo ou porção."} 
                    techs={"React + TypeScript; Chakra UI; Teact testing library"}
            />

            </Content>
        </Container>
    )
}
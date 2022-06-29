import { TechCard } from "../../components/TechCard"
import JS from "../../assets/js.png"
import Python from "../../assets/python.png"
import TS from "../../assets/ts.png"
import React from "../../assets/react.png"
import Flask from "../../assets/flask.png"
import Node from "../../assets/nodejs.png"
import Mongo from "../../assets/mongo.png"
import Psql from "../../assets/psql.png"
import Ubuntu from "../../assets/ubuntu.png"
import Git from "../../assets/git.png"
import Figma from "../../assets/figma.png"
import Docker from "../../assets/docker.png"
import { Box, Container, Content, Wrap } from "./styled"

export const MyTechs = () => {

    return (
    <Container>
        <h2>Minhas tecnologias</h2>
        <Wrap>
        <Box>
        <h3>Linguagens de programação</h3>
        <Content>
            <TechCard source={JS} techName={"JavaScript"} />
            <TechCard source={Python} techName={"Python"} />
            <TechCard source={TS} techName={"TypeScript"} />
        </Content>
        </Box>
        <Box>
        <h3>Frameworks</h3>
        <Content>
            <TechCard source={React} techName={"React"} />
            <TechCard source={Flask} techName={"Flask"} />
            <TechCard source={Node} techName={"Node"} />
        </Content>
        </Box>
        <Box>
        <h3>Bancos de dados</h3>
        <Content>
            <TechCard source={Mongo} techName={"Mongo"} />
            <TechCard source={Psql} techName={"Psql"} />
        </Content>
        </Box>
        <Box>
        <h3>Tecnologias gerais</h3>
        <Content>
            <TechCard source={Ubuntu} techName={"Ubuntu"}/>
            <TechCard source={Git} techName={"Git"} />
            <TechCard source={Figma} techName={"Figma"}/>
            <TechCard source={Docker} techName={"Docker"} />
        </Content>
        </Box>
        </Wrap>
    </Container>
    )
}
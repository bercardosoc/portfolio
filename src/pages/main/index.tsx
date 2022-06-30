import { AboutMe } from "../../components/AboutMe"
import { Contacts } from "../../components/Contacts"
import { GroupProjects } from "../../components/GroupProjects"
import { Header } from "../../components/Header"
import { MyTechs } from "../../components/MyTechs"
import Global from "../../style/global"

export const Main = () => {
    return (
        <>
            <Global/>
            <Header/>
            <AboutMe/>
            <MyTechs/>
            <GroupProjects/>
            <Contacts/>
        </>
    )
}
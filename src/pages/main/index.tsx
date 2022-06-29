import { AboutMe } from "../../components/AboutMe"
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
        </>
    )
}
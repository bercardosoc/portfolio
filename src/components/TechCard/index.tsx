import { Container } from "./style"

export const TechCard = ({ source, techName }: any) => {
    
    return (
        <Container>
            <img src={source} alt={techName} />
            <span>{techName}</span>
        </Container>
    )
}
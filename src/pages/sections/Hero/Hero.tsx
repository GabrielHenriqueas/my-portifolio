import styled from "@emotion/styled"
import Avatar from "../../../assets/images/avatar.jpg"


const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))
    
    const StyledImage = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }))


    return (

        <>
         <StyledHero>
            ola
            <StyledImage src={Avatar} alt="Avatar" />
         </StyledHero>
        </>
    )
}
export default Hero
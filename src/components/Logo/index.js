import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1.5rem;

    width: 100%;
    max-width: 350px;
`

export default function Logo(){
    return (
        <LogoContainer>
            <img src="/logoalura.png"></img>
        </LogoContainer>
    )
}
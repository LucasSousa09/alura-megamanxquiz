import styled from "styled-components"

const OtherQuizes = styled.div`
    width: 100%;
    padding: .5rem 0 .5rem .8rem;
    margin-bottom: .5rem;

    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.secondaryBg };

    a {
        text-decoration:none;
        color: ${({theme}) => theme.colors.contrastText}
    }

    &:hover{
        background-color: ${({theme}) => theme.colors.terciaryBg}
    }
`

export default OtherQuizes;
import styled from 'styled-components';

const OptionsContainer = styled.div`
    width: 100%;
    padding: .5rem 0 .5rem .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.mainBg};

    cursor: pointer;
    
    a {
        text-decoration:none;
        color: ${({ theme }) => theme.colors.contrastText}
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.primary}
    }
`;

export default OptionsContainer;

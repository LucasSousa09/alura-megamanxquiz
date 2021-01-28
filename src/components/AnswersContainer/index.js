import styled from 'styled-components';

const AnswersContainer = styled.div`
    width: 100%;
    padding: .5rem 0 .5rem .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;

    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.secondaryBg};

    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.colors.terciaryBg}
    }
`;

AnswersContainer.Correct = styled.div`
    width: 100%;
    padding: .5rem 0 .5rem .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: #4CAF50;
`;

AnswersContainer.Wrong = styled.div`
    width: 100%;
    padding: .5rem 0 .5rem .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: #FF5722;
`;

export default AnswersContainer;

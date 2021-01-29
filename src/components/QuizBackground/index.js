import styled from 'styled-components';

const QuizBackground = styled.div`
    width: 100%;
    flex:1;

    background-size: cover;
    background-position: center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-color: ${({ theme }) => theme.colors.mainBg};

    @media screen and (max-width: 500px){
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: none;

        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;

            display: block;
            width: 100%;
            height: 210px;
            
            background-size: cover;
            background-position: center;
            background-image: linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}), url(${({ backgroundImage }) => backgroundImage});

            z-index: 1;
        }
        *:first-child{
            position: relative;
            z-index: 10;
        }
    }
`;

export default QuizBackground;

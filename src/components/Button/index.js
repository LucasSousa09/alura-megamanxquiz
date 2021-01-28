import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: .5rem;

    margin-top: .5rem;

    font-family: inherit;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary};

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    color: ${({ theme }) => theme.colors.contrastText};
    cursor: pointer;

    transition: 0.2s;

    &:active{
      transform: scale(0.98);
    }

    &:hover,
    &:focus{
      background-color: ${({ theme }) => theme.colors.terciary};
    }
    &:disabled{
      background-color: #ccc;
      cursor: not-allowed
    }
  }
  /* .confirmation-button{
    display:flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-weight: 700;

    margin-top: .5rem;
  }

  .confirmation-button.correct,
  .confirmation-button.wrong{
    width: 48px;
    height: 48px;

    border-radius: 50%;
    border: none;

    padding: 0;

    background-color: #fff;
  }

  .confirmation-button.wrong{
    background-color: transparent;
  } */
`;

Button.ChevronLeft = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;

    margin: 0;
    
    width: 40px;
    height: 40px;
    margin-right: 8px;

    border-radius: 50%;
    border: none;

    &:hover,
    &:focus{
      background-color: rgba(255,255,255,0.2);
      outline: none;
    }    

    cursor: pointer;
`;

export default Button;

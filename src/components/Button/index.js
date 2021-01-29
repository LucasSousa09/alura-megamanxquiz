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
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    &:disabled{
      background-color: #ccc;
      cursor: not-allowed
    }
  }
`;

// Button.ChevronLeft = styled.a`
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     background-color: transparent;

//     margin: 0;

//     width: 40px;
//     height: 40px;
//     margin-right: 8px;

//     border-radius: 50%;
//     border: none;

//     &:hover,
//     &:focus{
//       background-color: rgba(255,255,255,0.2);
//       outline: none;
//     }

//     cursor: pointer;
//     transition: .3s;
// `;

export default Button;

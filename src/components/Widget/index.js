import styled from 'styled-components'

const Widget = styled.div`
  position: relative;

  z-index: 999;
  margin: 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #1C1814;
  border-radius: 4px;
  overflow: hidden;  

  h1, h2, h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p{

    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  input{
    width: 100%;
    background-color: transparent;
    color: ${({theme}) => theme.colors.contrastText};

    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: ${({theme}) => theme.borderRadius};

    font-family: inherit;

    padding: .5rem 0 .5rem 0.8rem;
    margin-bottom: 1rem;
  }

  button{
    width: 100%;
    padding: .5rem;

    font-family: inherit;
    background-color: ${({theme}) => theme.colors.primary};

    border: none;
    border-radius: ${({theme}) => theme.borderRadius};

    color: ${({theme}) => theme.colors.contrastText};
    cursor: pointer;

    &:active{
      transform: scale(0.98);
    }

    &:hover,
    &:focus{
      background-color: ${({theme}) => theme.colors.terciary};
    }
    &:disabled{
      background-color: #ccc;
      cursor: not-allowed
    }
  }

  .chevron-left{
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    
    width: 40px;
    height: 40px;
    margin-right: 8px;

    border-radius: 50%;

    &:hover,
    &:focus{
      background-color: rgba(255,255,255,0.2);
    }
  }
  .confirmation-button{
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
  }  

`


Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin: 0;
  }
`

Widget.Content = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 24px 32px 32px 32px;

  *{
   width: 100%; 
  }

  & > *:first-child{
    margin-top:0;
  }
  & > *:last-child{
    margin-bottom: 0;
  }
  
  ul{
    list-style: none;
    padding: 0;
  }
`

Widget.Animation = styled.div`
  position: relative;
  width: 100%;
  height: 10px;

  background-color: transparent;

  .animation{
    content: "";
    position: absolute;
    top:0;
    left:0;
  
    height: 10px;


    background-color: ${({theme}) => theme.colors.secondary};

    animation: load 2s linear;
  }

  @keyframes load{
    0%{
        width: 0;
    }
    100%{
        width: 100%
    }
  }
`

export default Widget
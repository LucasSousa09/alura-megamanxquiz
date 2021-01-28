import styled from 'styled-components';

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
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin: 0;
  }
`;

Widget.Content = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: left;
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
`;

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


    background-color: ${({ theme }) => theme.colors.secondary};

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
`;

export default Widget;

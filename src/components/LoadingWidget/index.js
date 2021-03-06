import styled from 'styled-components';
import React from 'react';
import Widget from '../Widget';

const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export default function LoadingWidget() {
  return (
    <Loading>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '348px',
          height: '150px',
          objectPosition: 'center',
        }}
        src="https://media3.giphy.com/media/SSFCk3iiylUX3nndBf/giphy.gif"
        className="js-image"
      />

    </Loading>
  );
}

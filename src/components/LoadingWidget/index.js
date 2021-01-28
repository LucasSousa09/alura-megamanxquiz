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
      <Widget.Content>
        [Carregando...]
      </Widget.Content>
    </Loading>
  );
}

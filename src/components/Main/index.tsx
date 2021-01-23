import React from 'react';

import * as S from './styles';

const Main = ({
  title = 'Create-react-app Boilerplate',
  description = 'Typescript, ReactJS, Jest, RTC, Storybook, Styled-Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;

import React from 'react';
import styled from './HeaderStyle';

const Header = () => (
  <styled.Container>
    <styled.Title>ASOME</styled.Title>
    <styled.SubTitle>
      Asome이 제공하는 AI 기반 업무 보조 챗봇 시스템을 활용하여 업무 관리
      복잡도를 절감시켜보세요!
    </styled.SubTitle>
  </styled.Container>
);

export default Header;

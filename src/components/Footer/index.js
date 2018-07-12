import React from 'react';
import styled from './FooterStyle';

const infos = [
  [{ text: 'Copyright 2018' }, { text: 'ASOME' }],
  [
    { text: 'Introduce ASOME' },
    { text: 'ASOME은 현재 AI기반 업무 보조 챗봇 개발 중입니다.' },
  ],
  [{ text: 'by ASOME' }, { text: '' }],
];

const Footer = () => (
  <styled.Container>
    {infos.map((inner, index) => (
      <styled.GroupWrapper key={`inner_${index}`}>
        {inner.map(info => (
          <styled.TextWrapper key={info.text}>
            <styled.Text>{info.text}</styled.Text>
          </styled.TextWrapper>
        ))}
      </styled.GroupWrapper>
    ))}
  </styled.Container>
);

export default Footer;

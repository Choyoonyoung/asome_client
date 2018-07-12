import React from 'react';
import styled from './FooterStyle';

const Footer = () => (
	<styled.Container>
		<styled.GroupWrapper>
			<styled.TextWrapper>Copyright 2018</styled.TextWrapper>
			<styled.TextWrapper>Introduce ASOME</styled.TextWrapper>
			<styled.TextWrapper>by ASOME
			</styled.TextWrapper>
		</styled.GroupWrapper>
		<styled.GroupWrapper>
			<styled.TextWrapper>ASOME</styled.TextWrapper>
			<styled.TextWrapper>ASOME은 현재 AI기반 업무 보조 챗봇 개발 중입니다.</styled.TextWrapper>
		</styled.GroupWrapper>
	</styled.Container>
);

export default Footer;
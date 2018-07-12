import React from 'react';
import styled from './NavStyle';
import { Link } from 'react-router-dom';


const navItem = [
	{ name: '나의 챗봇', link: '/' },
	{ name: '회의록', link: '/meeting' },
	{ name: '개인 메모', link: '/memo' },
	{ name: '회원정보', link: '/info' },
	{ name: '로그아웃', link: '/logout' },
	{ name: '설정', link: '/setting' },
];

const Navbar = () => (
	<styled.Container>
		{
			navItem.map(item => (
				<Link to={item.link} key={item.link}>
					<styled.NavSelect>
						<styled.Text>
							{item.name}
						</styled.Text>
					</styled.NavSelect>
				</Link>
			))	
		}
	</styled.Container>
);

export default Navbar;
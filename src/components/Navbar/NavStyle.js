import styled from 'styled-components';

const Container = styled.div`
	flex-basis: 250px;
	height: 300px;
	display: flex;
	flex-direction: column;
`;
const NavSelect = styled.div`
	padding-left: 10px;
	flex: 1;
	background-color: #121212;
	display: flex;
	align-items: center;
`;
const Text = styled.p`
	color: white;
`;
export default { Container, NavSelect, Text };
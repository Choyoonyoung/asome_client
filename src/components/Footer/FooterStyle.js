import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 200px;
	background-color: #212121;
	display: flex;
	flex-direction: column;

`;

const GroupWrapper = styled.div`
	display: flex;
	flex: 1;
`;

const TextWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export default { Container, GroupWrapper, TextWrapper };
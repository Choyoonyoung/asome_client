import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
`;
const Chat = styled.div`
	flex: 3;
`;
const Memo = styled.div`
	flex: 1;
	height: 100%;
	border: 1px solid;
	border-radius: 25px;
	padding: 5px;
`;
const Title = styled.h2`

	text-align: center;
`;
const Info = styled.p`
	margin-top: 10px;

`;
const CreateMemo = styled.div`
	display: flex;
	flex-direction: column;
`;
const MemoData = styled.div`
	margin-top: 5px;
	text-align: center;
	background-color: blue;
	border: 0px solid;
	border-radius: 10px;
`;
const Button = styled.button`
	background-color: #66ccff;
`;


export default { Container, Chat, Memo, Title, Info, CreateMemo, MemoData, Button};
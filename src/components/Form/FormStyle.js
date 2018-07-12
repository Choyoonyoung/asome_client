import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 900px;
	border: 1px solid;

`;
const FormBox = styled.form`

	display: flex;
	flex-direction: column;
	padding: 10px;

`;
const Badge = styled.div`
	border-round: 30px;
	background-color: blue;
	width: 100px;
	height: 50px;
	
`;
const BadgeText = styled.h4`
	color:white;
`;
const FormLabel = styled.div`
	background-color: light-gray;
	border-radius: 10px
	border: 0.5px solid gray;
	weight: 100px;
	height: 50px;
`;
const TitleForm = styled.input`
	width: 690px;
`;
const Button = styled.button`
	margin: 20px;
	background-color: blue;
	color: white;
`;
const Mt = styled.div`
	margin-top: 10px;
`;
const PlusForm = styled.input`
	width: 800px;
	height: 200p;
`;
const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
`;
export default { Container, FormBox, Badge, BadgeText, FormLabel, TitleForm, Button, Mt, PlusForm, FormGroup};
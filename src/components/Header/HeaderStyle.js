import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #121212;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0 0 4px;
`;

const SubTitle = styled.p`
  color: #ffffff;
  margin: 0;
`;

export default { Container, Title, SubTitle };

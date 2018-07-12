import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #121212;
  display: flex;
`;

const GroupWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 12px;
  color: #ffffff;
`;

export default { Container, GroupWrapper, TextWrapper, Text };

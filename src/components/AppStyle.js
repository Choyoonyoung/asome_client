import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  min-height: 80vh;
  padding: 16px 8px;
`;

export default { Container, ContentSection };

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex-basis: 180px;
  height: 320px;
  display: flex;
  flex-direction: column;
`;

const NavSelect = styled(Link)`
  padding-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  color: #121212;
  border-radius: 12px;
  &:hover {
    background-color: blue;
    color: #ffffff;
    transition: all 300ms;
  }
`;

export default { Container, NavSelect };

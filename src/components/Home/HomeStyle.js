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
  border-radius: 8px;
  padding: 5px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #121212;
  padding: 8px;
`;

const Textarea = styled.textarea``;

const Info = styled.p`
  margin-top: 10px;
`;

const CreateMemo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemoData = styled.div`
  margin-top: 8px;
  text-align: center;
  background-color: #898989;
  border: none;
  border-radius: 4px;
  padding: 4px 0;
`;

const Button = styled.button`
  margin-top: 8px;
  background-color: #66ccff;
  border: none;
  border-radius: 4px;
`;

export default {
  Container,
  Chat,
  Memo,
  Title,
  Input,
  Info,
  CreateMemo,
  MemoData,
  Button,
};

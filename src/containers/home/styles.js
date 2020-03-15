import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyResults = styled(Container)`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 20px;
  margin: 150px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
`;
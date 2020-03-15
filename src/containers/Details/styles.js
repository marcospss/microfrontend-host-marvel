import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5d5d5d;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 26px;
    text-transform: uppercase;
  }
  p {
      padding: 20px;
      font-size: 16px;
      a {
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: #ccc;
        background: #00000030;
        padding: 20px;
        border: 1px solid #efefef;
        border-radius: 10px;
        &:hover {
            color: #fff;
            background: #ffffff30;
        }
      }
  }
`;
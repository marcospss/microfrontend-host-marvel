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
  a {
    position: absolute;
    top: 100px;
    left: 40px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ccc;
    background: #00000030;
    padding: 10px;
    border-radius: 10px;
    &:hover {
        color: #fff;
        background: #ffffff30;
    }
  }
  h2 {
    font-size: 26px;
    text-transform: uppercase;
  }
  img {
    max-width: 280px;
  }
  p {
      font-size: 16px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
cursor: pointer;
width: 100%;
background: #fff;
padding: 18px 24px 15px;
color: #111;
border-radius: 4px;
display: inline-block;
font-size: 16px;
`;
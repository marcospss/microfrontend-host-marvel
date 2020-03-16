import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  background: #00000060;
`;

export const Header = styled.h2`
  font-size: 24px;
  margin: 0px;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 30px;
  span {
    font-size: 18px;
    color: #5d5d5d;
  }
`;

export const Form = styled(Container)`
  width: 50%;
  height: auto;
  top: 150px;
  padding: 40px;
  border-radius: 30px;
  background: #ccc;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 40px;
  padding: 10px;
  legend {
      color: #5d5d5d;
      padding: 0px 20px;
      text-transform: uppercase;
  }
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    line-height: 22px;
    color: #000;
    background-color: transparent;
    background-clip: padding-box;
    border: transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-bottom: 10px;
`;


export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    line-height: 22px;
    color: #000;
    background-color: transparent;
    background-clip: padding-box;
    border: transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-bottom: 10px;
`;


export const Button = styled.button.attrs({
    type: 'button',
  })`
  cursor: pointer;
  width: 50%;
  background: #fff;
  padding: 18px 24px 15px;
  color: #111;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
`;

export const Close = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 21px;
  font-weight: bold;
  border-radius: 70%;
  padding: 15px 20px;
`;

export const Message = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ status }) => (status === 'success') ? '#000' : '#721c24'};
  background-color: ${({ status }) => (status === 'success') ? '#dff8d7' : '#f8d7da'};
  padding: 20px;
  margin: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
`;
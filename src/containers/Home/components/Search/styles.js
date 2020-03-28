import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  position: fixed;
  padding: 20px;
  background-color: #ccc;
  top: 78px;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  font-size: 16px;
  text-align: center;
  legend {
      padding: 0px 20px;
      text-transform: uppercase;
  }
  border-radius: 10px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  line-height: $input-line-height;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
`;

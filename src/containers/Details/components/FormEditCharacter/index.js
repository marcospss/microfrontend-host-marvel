import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Fieldset,
  Form,
  Input,
  TextArea,
  Button,
  Message,
  Close,
} from './styles';

const FormEditCharacter = ({ character, toggleDisplayForm }) => {
  const {
    data: { id, name, description }
  } = character;

  const [characterValues, setValue] = useState({
    id,
    name,
    description
  });

  const [alert, setAlert] = useState({
    status: null,
    message: '',
  });

  const setAlertMessage = (status, message) => {
    setAlert({
      status,
      message
    });
  }

  const onChange = event => {
    const { currentTarget } = event;
    setValue(prevState => {
      return { ...prevState, [currentTarget.name]: currentTarget.value };
    });
  };

  const onSubmit = () => {
    const nameDBLocalStorage = "marvelApi";
    const localStorageMarvelApi = localStorage.getItem(nameDBLocalStorage);

    if (localStorage.getItem(nameDBLocalStorage)) {
      const dataLocalStorage = JSON.parse(localStorageMarvelApi);
      const hasValue = dataLocalStorage.find(item => (item.id === characterValues.id));
      if (hasValue && !!Object.keys(hasValue).length) {
        setAlertMessage('error','Personagem já está salvo!');
        return;
      };
      localStorage.setItem(
        nameDBLocalStorage,
        JSON.stringify([...dataLocalStorage, characterValues])
      );
      setAlertMessage('success','Personagem salvo com sucesso!');
    } else {
      localStorage.setItem(
        nameDBLocalStorage,
        JSON.stringify([characterValues])
      );
      setAlertMessage('success','Personagem salvo com sucesso!');
    }
  };

  return (
    <Container>
      <Form>
          <Close onClick={() => toggleDisplayForm()}>X</Close>
        <Header>
          <span>Editando o personagem:</span> {name}
        </Header>
        <Fieldset>
          <legend>Nome do personagem</legend>
          <Input
            type="text"
            name="name"
            value={characterValues.name}
            onChange={onChange}
            required
          />
        </Fieldset>

        {!!description && (
          <Fieldset>
            <legend>Descrição do personagem</legend>
            <TextArea
              value={characterValues.description}
              name="description"
              onChange={onChange}
              cols="30"
              rows="3"
              required
            />
          </Fieldset>
        )}
        <Button onClick={onSubmit}>
          Salvar
        </Button>
        {
          alert.message &&
          <Message status={alert.status}>{alert.message}</Message>
        }
      </Form>
    </Container>
  );
};

FormEditCharacter.propTypes = {
  character: {}
};

FormEditCharacter.propTypes = {
  character: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired,
  toggleDisplayForm: PropTypes.func.isRequired,
};

export default FormEditCharacter;

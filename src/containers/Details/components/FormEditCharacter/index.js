import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Fieldset, Form, Input, TextArea, Button } from './styles';

const FormEditCharacter = ({ character }) => {
  const {
    data: { id, name, description }
  } = character;
  return (
    <Container>
      <Form>
      <Header>
        <span>Editando o personagem:</span> {name}
      </Header>
      <Fieldset>
        <legend>Nome do personagem</legend>
        <Input type="text" value={name} />
      </Fieldset>

      {
        !!description &&
        <Fieldset>
          <legend>Descrição do personagem</legend>
          <TextArea value={description} cols="30" rows="5" />
        </Fieldset>
      }
        <Button type="button">Salvar</Button>
      </Form>
    </Container>
  )
};

FormEditCharacter.propTypes = {
  character: {}
};

FormEditCharacter.propTypes = {
  character: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  }).isRequired,
};

export default FormEditCharacter;

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import FormEditCharacter from './index';

const character = {
  data: {
    id: 21032020,
    name: 'Abomination (Emil Blonsky)',
    description:
      'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
      extension: 'jpg'
    }
  }
};

afterEach(cleanup);

test('It Should render character details', () => {
  const { getByText } = render(
    <FormEditCharacter character={character} toggleDisplayForm={() => {}} />
  );
  expect(getByText('Abomination (Emil Blonsky)')).toBeTruthy();
});

test('It Should save character success', () => {
  const { getByText, getByTestId } = render(
    <FormEditCharacter character={character} toggleDisplayForm={() => {}} />
  );
  fireEvent.click(getByTestId('SalvarPersonagem'));
  expect(getByText('Personagem salvo com sucesso!')).toBeInTheDocument();
});

test('It Should save character error', () => {
  const { getByText, getByTestId } = render(
    <FormEditCharacter character={character} toggleDisplayForm={() => {}} />
  );
  fireEvent.click(getByTestId('SalvarPersonagem'));
  fireEvent.click(getByTestId('SalvarPersonagem'));
  expect(getByText('Personagem já está salvo!')).toBeInTheDocument();
});

test('It Should edit name character', () => {
  const { getByTestId } = render(
    <FormEditCharacter character={character} toggleDisplayForm={() => {}} />
  );
  const inputName = getByTestId('name');
  fireEvent.change(inputName, { target: { value: 'Abomination (Emil Blonsky) Edit Character Name' } });
  expect(inputName.value).toEqual('Abomination (Emil Blonsky) Edit Character Name');
});

test('It Should edit description character', () => {
  const { getByTestId } = render(
    <FormEditCharacter character={character} toggleDisplayForm={() => {}} />
  );
  const inputDescription = getByTestId('description');
  fireEvent.change(inputDescription, { target: { value: 'Formerly known as Emil Blonsky Edit Character Description' } });
  expect(inputDescription.value).toEqual('Formerly known as Emil Blonsky Edit Character Description');
});

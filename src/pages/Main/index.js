import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  search: Yup.string().required('Este campo é obrigatório'),
});

export default function Main() {
  function handleSubmit() {}

  return (
    <Wrapper>
      <Content>
        <div>
          <img src={logo} alt="stock market" />
          <h1>Encontre informações atualizadas do mercado de ações</h1>
        </div>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="search" placeholder="Ex: AAPL, GOOGL, FB" />

          <button type="submit">Pesquisar</button>
        </Form>
      </Content>
    </Wrapper>
  );
}

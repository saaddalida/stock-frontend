import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import { fetchStockRequest } from '../../store/modules/stock/actions';
import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  symbol: Yup.string().required('O símbolo da empresa é obrigatório'),
});

export default function Main() {
  const dispatch = useDispatch();

  function handleSubmit({ symbol }) {
    dispatch(fetchStockRequest({ symbol }));
  }

  return (
    <Wrapper>
      <Content>
        <div>
          <img src={logo} alt="stock market" />
          <h1>Encontre informações atualizadas do mercado de ações</h1>
        </div>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="symbol" placeholder="Ex: AAPL, GOOGL, FB" />

          <button type="submit">Pesquisar</button>
        </Form>
      </Content>
    </Wrapper>
  );
}

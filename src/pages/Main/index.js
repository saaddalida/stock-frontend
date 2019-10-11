import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import { Container, Content, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <div>
        <h1>Acompanhe as mudanças na bolsa de valores</h1>
      </div>
      <Content>
        <div>
          <ul>
            <li>
              <FaCheckCircle size={80} color="#3854C9" />
              <span>
                Fique por dentro das oscilações de valor das empresas
                gratuitamente
              </span>
            </li>
            <li>
              <FaCheckCircle size={70} color="#3854C9" />
              <span>
                Encontre informações atualizadas e gráficos detalhados
              </span>
            </li>
          </ul>

          <Link to="/dashboard">
            <SubmitButton>Explorar</SubmitButton>
          </Link>
        </div>

        <img src={logo} alt="Stock exchange" />
      </Content>
    </Container>
  );
}

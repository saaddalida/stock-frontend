import React from 'react';

import Header from '../../components/Header';
import List from '../../components/List';
import Details from '../../components/Details';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <List />
        <Details />
      </Container>
    </>
  );
}

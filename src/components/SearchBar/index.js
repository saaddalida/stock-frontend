import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="Digite a ação ou empresa desejada" />
      <FaSearch color="#fff" size={18} />
    </Container>
  );
}

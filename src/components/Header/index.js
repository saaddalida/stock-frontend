import React from 'react';

import { FaBell, FaCog } from 'react-icons/fa';
import SearchBar from '../SearchBar';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <SearchBar />

      <div>
        <FaBell color="#fff" size={30} />
        <FaCog color="#fff" size={30} />
      </div>
    </Container>
  );
}

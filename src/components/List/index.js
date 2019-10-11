import React from 'react';

import { Container, StockList } from './styles';

export default function List() {
  return (
    <Container>
      <StockList>
        <li>
          <h1>AAPL</h1>
          <div>
            <strong>127.14</strong>
            <span>+2,71%</span>
          </div>
        </li>
        <li>
          <h1>AAPL</h1>
          <div>
            <strong>127.14</strong>
            <span>+2,71%</span>
          </div>
        </li>
        <li>
          <h1>AAPL</h1>
          <div>
            <strong>127.14</strong>
            <span>+2,71%</span>
          </div>
        </li>
        <li>
          <h1>AAPL</h1>
          <div>
            <strong>127.14</strong>
            <span>+2,71%</span>
          </div>
        </li>
      </StockList>
    </Container>
  );
}

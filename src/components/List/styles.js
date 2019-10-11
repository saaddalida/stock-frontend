import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin: 20px 15px;
`;

export const StockList = styled.ul`
  margin: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c5cadb;
    padding: 15px 0;

    h1 {
      margin-right: 90px;
      color: #42505c;
    }

    strong {
      font-size: 18px;
      margin-right: 25px;
      color: #42505c;
    }

    span {
      font-size: 18px;
      font-weight: bold;
      color: #32a852;
    }
  }
`;

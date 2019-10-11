import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #232526 100%, #414345 80%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 100px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 24px;
    font-weight: normal;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
    }

    span {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #e3394f;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
      font-size: 18px;
      transition: background 0.3s;

      &:hover {
        background: #c72439;
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 12px 20px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
  margin: 50px auto;

  h1 {
    font-size: 40px;
    font-weight: normal;
    color: #3854c9;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 30px;

  img {
    width: 400px;
  }

  li {
    display: flex;
    margin-bottom: 60px;

    span {
      font-size: 20px;
      color: #3854c9;
    }

    svg {
      margin-right: 25px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 230px;
  height: 60px;
  font-size: 30px;
  margin: 20px 0 0 40px;

  color: #fff;
  background: #3854c9;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  &:hover {
    background: #153473;
  }
`;

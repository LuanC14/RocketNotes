import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  
  > main {
    max-height: 83vh;
    display: flex;
    overflow: auto;
  }

  @media(max-height: 768px) {

    > main {
        max-height: 76vh;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;
  margin-bottom: 28px;
  
  > li {
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  li + li {
    margin-top: 12px;
  }
`;

export const Content = styled.div`
  width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  button:first-child {
    display: flex;
    justify-content: flex-end;
    margin-top: 64px;
  }

  button:last-child {
    margin-top: 100px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 48px 0 16px;
  }

  p {
    text-align: justify;
    margin-bottom: 48px;
  }

  @media(max-height: 768px) {
      button:first-child {
      margin-top:32px;
    }

    h1 {
      margin: 32px 0 16px;

    }

    p {
      margin-bottom: 32px;
    }
  }
`;

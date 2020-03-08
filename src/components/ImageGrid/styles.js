import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 25px;
  grid-gap: 25px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
  figure {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: #000;
      &:hover {
        text-decoration: underline;
        color: #4e5f82;
      };
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
    }
    figcaption {
      padding: 10px;
    }
  }
`;

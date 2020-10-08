import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
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
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      color: #fefefe;
      text-decoration: none;
      border: 1px solid #fefefe;
      border-radius: 10px;
      overflow: hidden;
      background: #000;
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

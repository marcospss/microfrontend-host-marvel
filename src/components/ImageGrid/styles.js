import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  .item-1 {
    grid-row: span 1;
  }

  .item-2 {
    grid-row: span 2;
  }

  .item-3 {
    grid-row: span 3;
  }

  .item-4 {
    grid-row: span 4;
  }

  .item-5 {
    grid-row: span 5;
  }

  .item {
    position: relative;
  }
`;

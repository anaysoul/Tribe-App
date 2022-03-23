import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  position: flex;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Heading = styled.p`
  justify-content: space-between;
`;

import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header" "sidebar main";
  height: 100vh;
`;

export const Main = styled.main`
  grid-area: main;
  background-color: ${props => props.theme['background-50']};
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

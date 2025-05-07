import styled from "styled-components";


export const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 30rem;
  justify-content: center;
  align-content: center;

  min-height: 100vh;
  gap: 2rem;

  background-color: ${(props) => props.theme["color-grey-50"]};
`;

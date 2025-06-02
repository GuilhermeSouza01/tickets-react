import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme["color-grey-50"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme["color-grey-0"]};
  border: 1px solid ${(props) => props.theme["color-grey-100"]};
  border-radius: ${(props) => props.theme["border-radius-md"]};

  padding: 3rem;
  flex: 0 1 60rem;
  text-align: center;

  & h1 {
    margin-bottom: 2rem;
  }
`;

import styled from "styled-components";

export const StyledErrorFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["color-grey-50"]};
  padding: 3rem;
  height: 100vh;
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme["color-brand-0"]};
  border-radius: ${(props) => props.theme["border-radius-md"]};
  border: 1px solid ${(props) => props.theme["color-grey-100"]};

  padding: 3rem;
  flex: 0 1 6rem;
  text-align: center;

  & h1 {
    margin-bottom: 1rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 2rem;
    color: ${(props) => props.theme["color-grey-500"]};
  }
`;

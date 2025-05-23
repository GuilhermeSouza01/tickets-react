import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  ${(props) => props.type === "regular" && css`
    padding: 1.5rem 2.5rem;

    background-color: ${(props) => props.theme["color-grey-0"]};
    border: 1px solid ${(props) => props.theme["color-grey-100"]};
    border-radius: ${(props) => props.theme["border-radius-md"]};

    max-width: 60rem;
    width: 100%;
    margin: 2rem auto;
  `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 50rem;
    `}

  overflow: hidden;
  font-size: 0.875rem;
`;

StyledForm.defaultProps = {
  type: "regular",
};


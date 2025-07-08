import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.875rem;
      font-weight: 600;
      margin-top: 1rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.25rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.25rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.875rem;
      font-weight: 600;
      text-align: center;
    `}

    ${(props) =>
    props.as === "p" &&
    css`
      font-size: 0.5rem;
      font-weight: 500;
      color: ${(props) => props.theme["color-grey-500"]};
    `}

  line-height: 1.4;
  gap: 0.5rem;
`;

export default Heading;

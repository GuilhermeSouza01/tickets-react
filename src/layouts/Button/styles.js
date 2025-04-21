import {styled, css} from "styled-components";

const sizes = {
    small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
}

const variations = {
  primary: css`
    color: ${(props) => props.theme["color-brand-50"]};
    background-color: ${(props) => props.theme["color-brand-500"]};

    &:hover {
      background-color: ${(props) => props.theme["color-brand-700"]};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme["color-grey-600"]};
    background: ${(props) => props.theme["color-grey-0"]};
    border: 1px solid ${(props) => props.theme["color-grey-200"]};

    &:hover {
      background-color: ${(props) => props.theme["color-grey-50"]};
    }
  `,
  danger: css`
    color: ${(props) => props.theme["color-red-100"]};
    background-color: ${(props) => props.theme["color-red-700"]};

    &:hover {
      background-color: ${(props) => props.theme["color-red-800"]};
    }
  `,
};

export const StyledButton = styled.button`
  border: none;
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variant]}
`;


StyledButton.defaultProps = {
  size: "medium",
  variation: "primary",
};



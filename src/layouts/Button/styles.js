import {styled, css} from "styled-components";

const sizes = {
    small: css`
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
  `,
}

const variations = {
  primary: css`
    color: ${(props) => props.theme["color-brand-50"]};
    background-color: ${(props) => props.theme["color-brand-400"]};

    &:hover {
      background-color: ${(props) => props.theme["color-brand-500"]};
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



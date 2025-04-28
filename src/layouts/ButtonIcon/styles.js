import styled from "styled-components";

export const StyledButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.375rem;
  border-radius: ${props => props.theme["border-radius-sm"]};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme["color-grey-100"]};
  };

  & svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${props => props.theme["color-brand-300"]};
  }
`;

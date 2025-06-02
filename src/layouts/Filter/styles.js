import styled, { css } from "styled-components";

export const StyledFilter = styled.div`
  border: 1px solid ${(props) => props.theme["color-grey-100"]};
  background-color: ${(props) => props.theme["color-grey-0"]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
`;

export const FilterButton = styled.button`
  background-color: ${(props) => props.theme["color-grey-0"]};
  border: none;
  ${(props) => props.active &&
    css`
    background-color: ${props.theme["color-brand-400"]};
    color: ${props.theme["color-brand-50"]};
  `}

  border-radius: ${(props) => props.theme["border-radius-sm"]};
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.275rem 0.5rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme["color-brand-400"]};
    color: ${(props) => props.theme["color-brand-50"]};
  }
`;

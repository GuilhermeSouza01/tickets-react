import styled from "styled-components";

export const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.5rem 1fr 1.2fr;
  gap: 1.5rem;

  padding: 0.75rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme["color-grey-100"]};
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem
  }
`;

export const Label = styled.label`
  font-weight: 500;

`;

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["color-red-700"]};
`;

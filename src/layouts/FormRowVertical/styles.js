import styled from "styled-components";

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.75rem 0;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Error = styled.span`
  color: ${(props) => props.theme["color-red-700"]};
  font-size: 0.875rem;
`;

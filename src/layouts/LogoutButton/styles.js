import styled from "styled-components";

export const StyledLogoutButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  background-color: ${(props) => props.theme["color-grey-0"]};
  color: ${(props) => props.theme["color-grey-900"]};
  border: 1px solid ${(props) => props.theme["color-grey-200"]};
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme["color-grey-100"]};
  }
`;

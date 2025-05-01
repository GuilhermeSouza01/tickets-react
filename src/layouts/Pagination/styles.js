import styled from "styled-components";

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationInfo = styled.p`
  font-size: 0.875rem;
  margin-left: 0.5rem;

  & span {
    font-weight: 600;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button`
  background-color: ${(props) => props.active ? props.theme["color-brand-400"] : props.theme["color-grey-50"]};
  color: ${(props) => props.active? props.theme["color-brand-50"] : "inherit"};
  border: none;
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  font-weight: 500;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.25rem;
  }

  &:has(span:first-child) {
    padding-right: 0.25rem;
  }

  & svg {
    height: 1.125rem;
    width: 1.125rem;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme["color-brand-400"]};
    color: ${(props) => props.theme["color-brand-50"]};
  }

`;

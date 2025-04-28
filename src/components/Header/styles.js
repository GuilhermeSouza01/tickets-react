import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  padding: 0.75rem 3rem;
  background-color: ${ props => props.theme['color-grey-0']};
  border-bottom: 1px solid ${ props => props.theme['color-grey-100']};
  gap: 1.5rem;
`;

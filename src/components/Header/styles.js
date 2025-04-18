import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4.8rem;
  background-color: ${ props => props.theme['color-tone-blue-100']};
  border-bottom: 1px solid ${ props => props.theme['color-grey-100']};
  gap: 2.4rem;
`;

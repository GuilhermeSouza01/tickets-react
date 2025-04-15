import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem;
  background-color: ${ props => props.theme['background-200']};
  box-shadow: 0 1px 2px 0px ${ props => props.theme['secondary-200']};
`;

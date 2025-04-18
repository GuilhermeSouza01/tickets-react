import styled from "styled-components";

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  background-color: ${props => props.theme["color-tone-blue-100"]};
  padding: 3.2rem 2.4rem;
  border-right: 1px solid ${props => props.theme["color-grey-100"]};

  /* grid-row: 1 / -1; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

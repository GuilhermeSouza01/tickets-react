import styled from "styled-components";

export const StyledTickets = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${props => props.theme['color-grey-900']};
  }

  p{
    font-size: 1rem;
    color: ${props => props.theme['color-grey-500']};
    line-height: 1.5;
  }
`;

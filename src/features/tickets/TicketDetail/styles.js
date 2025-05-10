import styled from "styled-components";

export const StyledTicketDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 1rem 0;
`;

export const StyledTicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem 4rem;
  border: 1px solid ${(props) => props.theme["color-grey-200"]};
  border-radius: ${(props) => props.theme["border-radius-sm"]};
  box-shadow: ${(props) => props.theme["shadow-sm"]};
  margin: 1rem 0;
`;

export const StyledTicketDetailHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  flex-direction: row;
`;

export const TitleSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledTicketDetailCreationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme["color-grey-500"]};

  p {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 0.075rem;
  }


`;
export const StyledTicketDetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  p {
    margin-top: 0.5rem;
    font-weight: 500;
    color: ${(props) => props.theme["color-grey-500"]};
  }
`;

import { useNavigate } from "react-router-dom";
import { TicketForm } from "../../features/tickets/TicketForm";
import { ButtonText } from "../../layouts/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import { HiChevronLeft } from "react-icons/hi2";
import styled from "styled-components";


/* eslint-disable react/react-in-jsx-scope */
export function CreateTicket() {

  const moveBack = useMoveBack();

  return (
    <StyledCreate>

      <ButtonText onClick={moveBack}>
         <HiChevronLeft strokeWidth={1.5} /> Back to Tickets
         </ButtonText>
      <TicketForm />
    </StyledCreate>

  );
}

export const StyledCreate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 60rem; */
  margin: 0 auto;
`;

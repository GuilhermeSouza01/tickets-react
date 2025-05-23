import React from 'react';
import {Table} from '../../layouts/Table';
import { HeaderContainer, StyledTickets, TextContainer } from './styles';
import { TicketTable } from '../../features/tickets/TicketTable';
import { Button } from '../../layouts/Button';
import { useNavigate } from 'react-router-dom';

export function Tickets() {

  const navigate = useNavigate();

  return (
    <StyledTickets>
      <HeaderContainer>
        <TextContainer>
          <h2>Tickets</h2>
          <p>Manage and track support requests</p>
        </TextContainer>
        <Button type="button" onClick={() => navigate('/create') }>New Ticket</Button>
      </HeaderContainer>

      <TicketTable />
    </StyledTickets>
  );
}

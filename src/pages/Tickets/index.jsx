import React from 'react';
import {Table} from '../../layouts/Table';
import { HeaderContainer, StyledTickets, TextContainer } from './styles';
import { TicketTable } from '../../features/tickets/TicketTable';
import { Button } from '../../layouts/Button';

export function Tickets() {
  return (
    <StyledTickets>
      <HeaderContainer>
        <TextContainer>
          <h2>Tickets</h2>
          <p>Manage and track support requests</p>
        </TextContainer>
        <Button type="button">New Ticket</Button>
      </HeaderContainer>

      <TicketTable />
    </StyledTickets>
  );
}

import React from 'react';
import { DataRow, EmptyTable, Header, StyledTable, Footer } from '../../layouts/Table/styles';
import { setAuthToken } from '../../services/axios';
import { Spinner } from '../../layouts/Spinner/Spinner';
import { Empty } from '../../layouts/Empty/Empty';
import { Pagination } from '../../layouts/Pagination/Pagination';
import { useTickets } from './useTickets';
import { TableBody } from '../../layouts/Table';
import { TicketRow } from './TicketRow';



export function TicketTable(){

  const {tickets, isLoading, count,error } = useTickets();

  console.log("tickets", tickets);

  if (isLoading) {
    return <Spinner />;
  }

  if (!tickets.length) return <Empty />

  if (error) {
    return <div>Error loading tickets: {error.message}</div>;
  }


  return (
    <StyledTable>
      <Header>
        <div>Id</div>
        <div>Title</div>
        <div>Status</div>
        <div>Priority</div>
        <div>Created At</div>
      </Header>
      <TableBody data={tickets} render={(ticket) => (
       <TicketRow key={ticket.id} ticket={ticket} />
      )}>
      </TableBody>
      <Footer >
        <Pagination count={count} />
      </Footer>
    </StyledTable>
  );
}

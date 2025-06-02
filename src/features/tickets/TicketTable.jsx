import React from 'react';
import { DataRow, EmptyTable, Header, StyledTable, Footer } from '../../layouts/Table/styles';
import { Spinner } from '../../layouts/Spinner';
import { Empty } from '../../layouts/Empty';
import { Pagination } from '../../layouts/Pagination/Pagination';
import { useTickets } from './useTickets';
import { TableBody } from '../../layouts/Table';
import { TicketRow } from './TicketRow';
import Menus from '../../layouts/Menus';
import { useSearchParams } from 'react-router-dom';



export function TicketTable(){

  const {tickets, isLoading, count,error } = useTickets();
  const [searchParams] = useSearchParams();


  if (isLoading) {
    return <Spinner />;
  }

  if (!tickets.length) return <Empty />

  if (error) {
    return <div>Error loading tickets: {error.message}</div>;
  }


  return (
    <Menus>
      <StyledTable>
        <Header>
          <div>Id</div>
          <div>Title</div>
          <div>Status</div>
          <div>Priority</div>
          <div>Created At</div>
          <div></div>
        </Header>
        <TableBody data={tickets} render={(ticket) => (
        <TicketRow key={ticket.id} ticket={ticket} />
        )}>
        </TableBody>
        <Footer >
          <Pagination count={count} />
        </Footer>
      </StyledTable>
    </Menus>

  );
}

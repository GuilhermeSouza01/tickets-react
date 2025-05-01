import React from 'react';
import { DataRow, EmptyTable, Header, StyledTable, Footer } from '../../layouts/Table/styles';
import { setAuthToken } from '../../services/axios';
import { Spinner } from '../../layouts/Spinner/Spinner';
import { Empty } from '../../layouts/Empty/Empty';
import { Pagination } from '../../layouts/Pagination/Pagination';
import { useTickets } from './useTickets';
import { TableBody } from '../../layouts/Table';



export function TicketTable(){

  const {tickets, isLoading, count,error } = useTickets();

  const token = '6|4UCGmm28PDwhlfT9fTZD6PVA4JGFXG6OCxpNmkV64aa44906';

  setAuthToken(token);



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
        <DataRow key={ticket.id}>
          <div>{ticket.id}</div>
          <div>{ticket.attributes.title}</div>
          <div>{ticket.attributes.status}</div>
          <div>{ticket.attributes.priority}</div>
          <div>{new Date(ticket.attributes.createdAt).toLocaleDateString()}</div>
        </DataRow>
      )}>
      </TableBody>
      <Footer >
        <Pagination count={count} />
      </Footer>
    </StyledTable>
  );
}

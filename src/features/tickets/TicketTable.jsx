import React from 'react';
import { Body, DataRow, EmptyTable, Header, StyledTable, Footer } from '../../layouts/Table/styles';
import { setAuthToken } from '../../services/axios';
import { useQuery } from '@tanstack/react-query';
import { getTickets } from '../../services/apiTickets';



export function TicketTable(){

  const token = '6|4UCGmm28PDwhlfT9fTZD6PVA4JGFXG6OCxpNmkV64aa44906';

  setAuthToken(token);

  const { data: tickets, isLoading, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: getTickets,
  });

  const hasTickets = Array.isArray(tickets?.data) && tickets.data.length > 0;


  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <Body>
      {hasTickets ? (
          tickets.data.map((ticket) => (
            <DataRow key={ticket.id}>
              <div>{ticket.id}</div>
              <div>{ticket.attributes?.title || 'No title'}</div>
              <div>{ticket.attributes?.status || 'No status'}</div>
              <div>{ticket.attributes?.priority || 'No priority'}</div>
              <div>{ticket.attributes?.createdAt ? new Date(ticket.attributes.createdAt).toLocaleDateString() : 'No date'}</div>
            </DataRow>
        ))) : (
          <EmptyTable>No tickets available</EmptyTable>
        )}
      </Body>
      <Footer />
    </StyledTable>
  );
}

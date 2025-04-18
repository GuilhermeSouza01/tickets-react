import React from 'react';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { Container, LayoutContainer, Main } from './styles';
import { Sidebar } from '../Sidebar';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Main>
        <Container>
         <Outlet />
        </Container>

      </Main>
    </LayoutContainer>
  )
}

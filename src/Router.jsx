import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Tickets } from "./pages/Tickets"
import { Login } from "./pages/Login/Login"
import { Ticket } from "./pages/Ticket"
import { CreateTicket } from "./pages/CreateTicket"
import { PageNotFound } from "./layouts/PageNotFound"
import ProtectedRoute from "./layouts/ProtectedRoute"
import { TicketDetail } from "./features/tickets/TicketDetail"

export function Router() {
  return (
    <Routes>
        <Route element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="tickets/create" element={<CreateTicket />} />
            <Route path="tickets/:ticketId" element={<TicketDetail />} />
        </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

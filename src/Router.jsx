import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Tickets } from "./pages/Tickets"
import { Login } from "./pages/Login/Login"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/tickets" element={<Tickets />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

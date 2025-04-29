import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


export function App() {

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
    </QueryClientProvider>
    </DarkModeProvider>

  )
}

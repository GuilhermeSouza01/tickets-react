import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px"}}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: `${lightTheme["color-grey-0"]}`,
                color: `${lightTheme["color-grey-900"]}`,
              }
             }}
          />
          <GlobalStyle />
    </QueryClientProvider>
    </DarkModeProvider>

  )
}

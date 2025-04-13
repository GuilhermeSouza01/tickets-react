import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ backgroundColor: defaultTheme.backgroundLight, color: defaultTheme.textPrimary, padding: '20px' }}>
        <h1 style={{ color: defaultTheme.primary }}>My React App</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>

  )
}

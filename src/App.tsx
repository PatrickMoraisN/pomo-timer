import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes'
import { CyclesContextProvider } from '@context/CyclesContext'
import { CountdownContextProvider } from '@context/CountdownContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <CountdownContextProvider>
            <Router />
          </CountdownContextProvider>
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

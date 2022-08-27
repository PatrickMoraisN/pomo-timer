import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Hello } from './components/Hello'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
        <Hello />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

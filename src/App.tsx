import { ThemeProvider } from 'styled-components'
import { Hello } from './components/Hello'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Hello />
    </ThemeProvider>
  )
}

export default App

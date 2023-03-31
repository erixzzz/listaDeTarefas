import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { TasksList } from './Pages/TasksList'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
       <TasksList />
    </ThemeProvider>
  )
}
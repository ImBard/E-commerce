import { HelperProvider } from './contexts/helpersContext'
import { RoutesPath } from './routes/routes'

function App() {

  return (
    <HelperProvider>
      <RoutesPath />
    </HelperProvider>
  )
}

export default App

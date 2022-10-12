import { AuthProvider } from "./contexts/auth"
import Rotas from "./routes"
import GlobalStyle from "./styles/globalStyles"


function App() {

  return (
    <>

      <AuthProvider>

        <GlobalStyle/>

        <Rotas />

      </AuthProvider>



    </>
  )
}

export default App

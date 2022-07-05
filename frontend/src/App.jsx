import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { ComerceProvider } from "./context/comerceContext"
import { Container } from 'react-bootstrap'
function App() {

  return (
    <>
      <ComerceProvider>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </ComerceProvider>
    </>
  )
}

export default App

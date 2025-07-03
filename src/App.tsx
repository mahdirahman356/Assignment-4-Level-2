import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {/* user route */}
          </Route>
          <Route>
            {/* admin route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

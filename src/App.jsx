import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import AllBooks from './pages/AllBooks'
import SingleBookDetails from './pages/SingleBookDetails'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import Register from './components/Register'
import MyBooks from './pages/MyBooks'
import './styles/App.css'
import { useState } from 'react'

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MyBooks token={token} />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/books/:bookId" element={<SingleBookDetails />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

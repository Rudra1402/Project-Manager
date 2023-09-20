import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllRoutes from './Routes'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const pm = localStorage.getItem("project-manager")
    if (!pm) return;
    const parsedUser = JSON.parse(pm)
    if (parsedUser.token)
      setUser(parsedUser?.user)
    else
      setUser(null)
  }, [])
  return (
    <Router>
      <Navbar user={user} usercb={setUser} />
      <AllRoutes user={user} setUser={setUser} />
      <Footer />
    </Router>
  );
}

export default App;

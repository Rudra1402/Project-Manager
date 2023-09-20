import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Provide from './components/Provide'
import Projects from './components/Projects'
import FreeAPIs from './components/FreeAPIs'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import ErrorRoute from './components/ErrorRoute'
import AllUsers from './components/AllUsers'

const AllRoutes = ({ user, setUser }) => (
    <Routes>
        <Route exact path="/" element={
            <>
                <Home user={user} />
                <hr style={{ margin: "0 auto", color: "#fff5", width: "75%" }} />
                <Provide />
            </>
        } />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/freeapis" element={<FreeAPIs user={user} />} />
        <Route path="/login" element={<Login usercb={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="*" element={<ErrorRoute />} />
    </Routes>
)

export default AllRoutes
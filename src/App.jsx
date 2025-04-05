import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header"
import Hero from "./Hero"
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Developers from "./Developers";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import DevelopersDetails from "./DevelopersDetails";
import { useEffect } from "react";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Dashboard2 from "./Dashboard2";

function App() {

  function ProtectedRoute({ children }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isAuth()) {
        navigate('/Login');
      }
    }, [navigate]);
  
    return isAuth() ? children : null;

  }
  
  function isAuth() {
    return localStorage.getItem("token") !== null;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="*" element={<NotFound />} /> 

        <Route path="/Posts" element={<ProtectedRoute><Posts /></ProtectedRoute>} /> 


        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> 
        <Route path="/Dashboard2" element={<ProtectedRoute><Dashboard2 /></ProtectedRoute>} /> 
        <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> 

        <Route path="/Developers" element={<Developers />} /> 
        <Route path="/Logout" element={<Hero />} /> 
        <Route path="/posts/:id" element={<PostDetails />} /> 
        <Route path="/developers/:id" element={<DevelopersDetails />} /> 
      </Routes>
    </Router>

  );
}
export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Hero from "./Hero"
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Developers from "./Developers";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Posts" element={<Posts />} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/Developers" element={<Developers />} /> 
        <Route path="/Logout" element={<Hero />} /> 
      </Routes>
    </Router>

  );
}
export default App

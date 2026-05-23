import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
     
     <Routes>

      <Route path="/" element={<Navigate to="/Welcome" />} />
      <Route path="/Welcome" element={<Welcome />} />

      <Route path="/Login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/profile" element={<Profile />} />

     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
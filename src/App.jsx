import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/Pages/LandingPage";
import { Footer } from "./Components";
import RegistrationPage from "./Components/Pages/RegistrationPage";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="registrationPage" element={<RegistrationPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

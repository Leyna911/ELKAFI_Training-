import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/Pages/LandingPage";
import { Footer } from "./Components";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import CoursParticulierPage from "./Components/Pages/CoursParticulierPage";
import FormationPage from "./Components/Pages/FormationPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="registrationPage" element={<RegistrationPage/>}/>
        <Route path="coursParticulierPage" element={<CoursParticulierPage/>}/>
        <Route path="formationPage" element={<FormationPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/Pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

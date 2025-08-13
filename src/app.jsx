import React from "react";
import HomePage from "./components/pages/home/home-page";
import AboutPage from "./components/pages/about/about-page";
import Navbar from "./components/layouts/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
    </>
  );
};

export default App;

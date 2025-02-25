import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/main_section/main_section";
import About from "./components/about_section/about";
import Skill from "./components/skill_section/skill";
import Services from "./components/services_section/services";
import Education from "./components/education_section/education";
import WorkShow from "./components/workshow_section/worksection";
import Contact from "./components/contact_section/contact";
import FooterSec from "./components/footer_section/footer";
import Gototop from "./components/gototop/gototop";
import './App.css'
const App = ()=>
{
  return(
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Services/>
      <Education/>
      <WorkShow/>
      <Contact/>
      <FooterSec/>
      <Gototop/>
    </div>
  )
}
export default App
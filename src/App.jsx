import React from 'react'
import { Hero } from './Components/Hero'
import { Navbar }  from './Components/Nav'
import { Contact } from "./Components/Contect";
import { Services } from './Components/Services'
import { Work } from './Components/Work'
import { About } from './Components/About'
import { Toaster } from "sonner";
import WhatsAppButton from "./components/WhatsAppButton";

import "./index.css";

const App = () => {
  return (
      <>
    <Toaster position="top-right" />  
    <div>
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
    </>
  )
}

export default App
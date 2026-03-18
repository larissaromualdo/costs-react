import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import './index.css';


function App() {
  return (
    <Router>
      <Container customClass="min-height">
      <Navbar />

      <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />}/>

      <Route path="/company" element={<Company />}/>

      <Route path="/contact" element={<Contact />} />

      <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
     
     <Footer />

    </Router>
  );
}

export default App;

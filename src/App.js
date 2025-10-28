import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>   
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
             <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
             <Route path="/contact" element={<Contact />} />
               <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />    
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Developer from "./pages/Developer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default function App() {




  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop/>
        <main role="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

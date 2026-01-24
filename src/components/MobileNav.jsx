import { Link } from "react-router-dom";
import "../styles/components/MobileNav.css";

export default function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-nav-overlay" onClick={onClose} />
      <div className="mobile-nav">
        <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <nav className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link hard-bolded special-font link" onClick={onClose}>
            MacroUni
          </Link>
          <Link to="/about" className="mobile-nav-link link" onClick={onClose}>
            About
          </Link>
          <Link to="/showcase" className="mobile-nav-link link" onClick={onClose}>
            Showcase
          </Link>
          
          <div className="mobile-nav-footer">
            <Link to="/privacy" className="mobile-nav-link secondary link" onClick={onClose}>
              Privacy
            </Link>
            <Link to="/terms" className="mobile-nav-link secondary link" onClick={onClose}>
              Terms
            </Link>
            <Link to="/developer" className="mobile-nav-link secondary link" onClick={onClose}>
              Developer
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

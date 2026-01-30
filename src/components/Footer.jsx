import { Link } from 'react-router-dom';
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/privacy" className='link'>Privacy</Link>
        <Link to="/terms" className='link'>Terms</Link>
        <Link to="/developer" className='link'>Developer</Link>
      </nav>
      {/* <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--border-color-pronounced)' }}>
        © {new Date().getFullYear()} MacroUni. All rights reserved.
      </p> */}
    </footer>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer role="contentinfo">
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/privacy" className='link'>Privacy Policy</Link>
        <Link to="/terms" className='link'>Terms of Service</Link>
        <Link to="/developer" className='link'>Developer</Link>
      </nav>
      {/* <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--border-color-pronounced)' }}>
        © {new Date().getFullYear()} MacroUni. All rights reserved.
      </p> */}
    </footer>
  );
}

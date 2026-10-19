import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../siteData.js';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <header className="site-header">
      <Link
        className="brand"
        to="/"
        aria-label={`${business.name} ${business.trade}, home`}
      >
        <img
          className="brand-logo"
          src={import.meta.env.BASE_URL + 'cost_cutters_logo_transparent.png'}
          alt="Cost Cutters Construction"
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav
        id="main-nav"
        className={open ? 'main-nav is-open' : 'main-nav'}
        aria-label="Main navigation"
      >
        {business.nav.map(item => (
          <Link
            key={item.href}
            to={`/${item.href}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link
          className="btn-cta"
          to="/#contact"
          onClick={() => setOpen(false)}
        >
          Get an estimate <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

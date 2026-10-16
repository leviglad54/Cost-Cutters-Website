import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        aria-label={`${business.name} ${business.trade}, home`}
      >
        <img
          className="brand-logo"
          src={import.meta.env.BASE_URL + 'cost_cutters_logo_transparent.png'}
          alt="Cost Cutters Construction"
        />
      </a>

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
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a
          className="btn-cta"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Get an estimate <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

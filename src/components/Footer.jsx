import { business } from '../siteData.js';

function Footer() {
  return (
    <footer className="site-footer">

      {/* Footer brand */}
      <a
        className="brand footer-brand"
        href="#top"
      >
        <img
          className="brand-logo"
          src={import.meta.env.BASE_URL + 'cost_cutters_logo_transparent.png'}
          alt="Cost Cutters Construction"
        />
      </a>

      {/* Service area */}
      <p>
        Made with care in{' '}
        {business.serviceArea.replace(/^Serving /, '')}.
      </p>

      {/* Back-to-top link */}
      <a href="#top">
        Back to top ↑
      </a>

      {/* Copyright */}
      <small className="copyright">
        © {new Date().getFullYear()} {business.name}
      </small>

    </footer>
  );
}

export default Footer;
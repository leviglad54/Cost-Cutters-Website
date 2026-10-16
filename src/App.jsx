// ============================================
// IMPORTS
// ============================================

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Hammer,
  Ruler,
  ShieldCheck,
} from 'lucide-react';

import Header from './components/Header.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ContactForm from './components/ContactForm.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';

import { business } from './siteData.js';


// ============================================
// MAIN APP COMPONENT
// ============================================

function App() {
  return (
    <>
      {/* Skip navigation link */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Site header */}
      <Header />


      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <main id="main">

        {/* ======================================
            HERO SECTION
        ====================================== */}

        <section className="hero" id="top">

          {/* Hero text and buttons */}
          <div className="hero-copy">

            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {business.serviceArea}
            </p>

            <h1>
              Good work.
              <br />
              <em>Built to last.</em>
            </h1>

            <p className="hero-description">
              {business.description}
            </p>

            {/* Hero action buttons */}
            <div className="hero-actions">

              <a
                className="btn-cta"
                href="#contact"
              >
                Tell us about your project
                <ArrowUpRight size={17} />
              </a>

             <a 
               Class="btn-cta" href="tel:+17173776056">
             <span CALL NOW! /span>
             </a>

            </div>

            {/* Hero tagline */}
            <div className="hero-note">
              <span className="note-line" />
              <span>PERSONAL SERVICE. SOLID CRAFT.</span>
            </div>

          </div>

          {/* Hero photo carousel */}
          <PhotoCarousel />
        </section>


        {/* ======================================
            TRUST STRIP
        ====================================== */}

        <section
          className="trust-strip"
          aria-label="What to expect"
        >

          <div>
            <Ruler />
            <span>Thoughtful planning</span>
          </div>

          <div>
            <Hammer />
            <span>Skilled hands</span>
          </div>

          <div>
            <ShieldCheck />
            <span>Built with care</span>
          </div>

        </section>


        {/* ======================================
            SERVICES SECTION
        ====================================== */}

        <section
          className="section services-section"
          id="services"
        >

          {/* Section heading */}
          <div className="section-heading">

            <div>
              <p className="eyebrow">
                WHAT WE DO
              </p>

              <h2>
                Made for your
                <br />
                <em>everyday.</em>
              </h2>
            </div>

            <p className="section-intro">
              From the first conversation to the final clean-up,
              good work starts with listening. Here are a few
              ways we can help.
            </p>

          </div>

          {/* Service cards generated from business data */}
          <div className="service-list">

            {business.services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}

          </div>

        </section>


        {/* ======================================
            PROJECTS SECTION
        ====================================== */}

        <section
          className="projects-section section"
          id="projects"
        >

          {/* Section heading */}
          <div className="section-heading">

            <div>
              <p className="eyebrow">
                A FEW FAVORITES
              </p>

              <h2>
                Work that feels
                <br />
                <em>like home.</em>
              </h2>
            </div>

            <p className="section-intro">
              Every project is different. These placeholders are
              ready for real photos that show the care behind
              the details.
            </p>

          </div>

          {/* Project cards generated from business data */}
          <div className="project-grid">

            {business.projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}

          </div>

        </section>


        {/* ======================================
            ABOUT SECTION
        ====================================== */}

        <section
          className="about-section"
          id="about"
        >

          {/* Years of experience */}
          <div className="about-number">

            <span>
              {business.yearsExperience}
            </span>

            <small>
              YEARS OF
              <br />
              EXPERIENCE
            </small>

          </div>

          {/* About text */}
          <div className="about-copy">

            <p className="eyebrow">
              A LITTLE ABOUT US
            </p>

            <h2>
              Good work is
              <br />
              <em>personal.</em>
            </h2>

            <p>
              We believe the best spaces are made with care,
              clear communication, and respect for the home
              they’re built in. You’ll work directly with the
              person doing the work, from the first idea to
              the last detail.
            </p>

            <a
              className="text-link"
              href="#contact"
            >
              Let's talk about yours
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* Decorative stamp */}
          <div
            className="about-stamp"
            aria-hidden="true"
          >
            <Check size={26} />

            <span>
              BUILT WITH
              <br />
              CARE
            </span>
          </div>

        </section>


        {/* ======================================
            CONTACT SECTION
        ====================================== */}

        <section
          className="contact-section section"
          id="contact"
        >

          {/* Contact information */}
          <div className="contact-copy">

            <p className="eyebrow">
              LET’S MAKE A PLAN
            </p>

            <h2>
              What are you
              <br />
              <em>imagining</em>
            </h2>

            <p>
              Share a few details and we’ll get back to you
              to talk through the next step. No pressure,
              just a good place to start.
            </p>

            {/* Direct contact details */}
            <div className="contact-direct">

              <span>Prefer to talk?</span>

              <a href={`tel:${business.phoneHref}`}>
                {business.phone}
              </a>

              <a href={`mailto:${business.email}`}>
                {business.email}
              </a>

            </div>

          </div>

          {/* Contact form component */}
          <ContactForm />

        </section>

      </main>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="site-footer">

        {/* Footer brand */}
        <a
          className="brand footer-brand"
          href="#top"
        >

          <span
            className="brand-mark"
            aria-hidden="true"
          >
            O<span>+</span>L
          </span>

          <span>
            <strong>{business.name}</strong>
            <small>{business.trade}</small>
          </span>

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

    </>
  );
}


// ============================================
// EXPORT
// ============================================

export default App;

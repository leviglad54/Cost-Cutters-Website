// ============================================
// IMPORTS
// ============================================

import { business } from '../siteData.js';


// ============================================
// CONTACT FORM COMPONENT
// ============================================

export default function ContactForm() {

  // Check whether Formspree has been configured
  const configured = Boolean(business.formspreeId.trim());


  // ==========================================
  // FORM
  // ==========================================

  return (
    <form
      className="contact-form"
      action={
        configured
          ? `https://formspree.io/f/${business.formspreeId}`
          : undefined
      }
      method="POST"
      onSubmit={(event) => {
        if (!configured) {
          event.preventDefault();
        }
      }}
    >

      {/* ======================================
          SETUP NOTICE
      ====================================== */}

      {!configured && (
        <p className="form-notice">
          <strong>Setup needed:</strong> Add your Formspree form ID in{' '}
          <code>src/siteData.js</code> to enable submissions.
        </p>
      )}


      {/* ======================================
          NAME AND EMAIL
      ====================================== */}

      <div className="form-row">

        <label>
          Your name

          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Name"
          />
        </label>

        <label>
          Email address

          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>

      </div>


      {/* ======================================
          PROJECT TYPE
      ====================================== */}

      <label>
        What do you have in mind?

        <select
          name="project_type"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a service
          </option>

          {business.services.map((service) => (
            <option key={service.number}>
              {service.title}
            </option>
          ))}

          <option>Something else</option>
        </select>

      </label>


      {/* ======================================
          PROJECT DESCRIPTION
      ====================================== */}

      <label>
        A little about the project

        <textarea
          name="message"
          rows="4"
          required
          placeholder="Tell us what you’re hoping to build or improve."
        />
      </label>


      {/* ======================================
          SPAM PROTECTION
      ====================================== */}

      <input
        type="text"
        name="_gotcha"
        className="honeypot"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />


      {/* ======================================
          SUBMIT BUTTON
      ====================================== */}

      <button
        className="button button-dark"
        type="submit"
        disabled={!configured}
      >
        {configured
          ? 'Send project request'
          : 'Connect Formspree to enable'}

        <span aria-hidden="true">↗</span>
      </button>


      {/* ======================================
          PRIVACY NOTICE
      ====================================== */}

      <p className="privacy-note">
        Your details are only used to respond to this request.
      </p>

    </form>
  );
}
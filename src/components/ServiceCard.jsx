// ============================================
// SERVICE CARD COMPONENT
// ============================================

export default function ServiceCard({ service }) {

  return (
    <article className="service-card">

      {/* ======================================
          SERVICE NUMBER
      ====================================== */}

      <span className="service-number">
        {service.number}
      </span>


      {/* ======================================
          SERVICE DETAILS
      ====================================== */}

      <div>

        <h3>
          {service.title}
        </h3>

        <p>
          {service.description}
        </p>

      </div>


      {/* ======================================
          SERVICE ARROW
      ====================================== */}

      <span
        className="service-arrow"
        aria-hidden="true"
      >
        ↗
      </span>

    </article>
  );
}
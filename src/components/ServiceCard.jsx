// ============================================
// SERVICE CARD COMPONENT
// ============================================

export default function ServiceCard({ service }) {

  return (
    <article className="service-card">

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
      
          <div>
            <a className="text link">
              <span> <u>View Gallery ↗</u> </span>
            </a>
          </div>    


    </article>
  );
}
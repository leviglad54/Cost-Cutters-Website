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
            <a className="btn-cta">
              <span> see our 
                <br />
              work</span>
            </a>
          </div>    


    </article>
  );
}
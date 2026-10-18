// ============================================
// SERVICE CARD COMPONENT
// ============================================
import { ArrowUpRight } from "lucide-react";

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
              <span> View Gallery </span>
              <ArrowUpRight size={17} />
            </a>
          </div>    


    </article>
  );
}
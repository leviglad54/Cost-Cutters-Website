export default function ServiceCard({ service }) {
  return <article className="service-card">
    <span className="service-number">{service.number}</span>
    <div><h3>{service.title}</h3><p>{service.description}</p></div>
    <span className="service-arrow" aria-hidden="true">↗</span>
  </article>;
}

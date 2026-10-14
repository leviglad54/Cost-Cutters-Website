export default function ProjectCard({ project, index }) {
  return <article className={`project-card project-${index + 1}`}>
    <div className="project-image">
      {project.image ? <img src={project.image} alt={project.alt} loading="lazy" /> : <div className="image-placeholder" role="img" aria-label={project.alt}><span>PROJECT PHOTO</span><small>Replace with your own image</small></div>}
    </div>
    <div className="project-caption"><div><p>{project.category}</p><h3>{project.title}</h3></div><span aria-hidden="true">↗</span></div>
  </article>;
}

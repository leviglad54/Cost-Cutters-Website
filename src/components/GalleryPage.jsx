
    function GalleryPage({ title, description, photos }) {
  return (
    <main className="gallery-page">
      <section className="gallery-intro">
        <h1><i>{title}</i></h1>
        <p>{description}</p>
      </section>

      <section className="gallery-grid">
        {(photos ?? []).map((photo, index) => (
          <figure className="gallery-item" key={photo.src}>
            <img
              src={import.meta.env.BASE_URL + photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            {photo.caption && (
              <figcaption>{photo.caption}</figcaption>
            )}
          </figure>
        ))}
      </section>
    </main>
  );
}

export default GalleryPage;
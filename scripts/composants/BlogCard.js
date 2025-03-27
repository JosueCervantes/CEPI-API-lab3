function BlogCard({ id, titre, description, image, auteur }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={titre} />
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Auteur:</strong> {auteur || "Anonyme"}</p>
          <a href={`blog.html?id=${id}`} className="btn" style={{ backgroundColor: "#00ADB5" }}>
            Voir plus
          </a>
        </div>
      </div>
    </div>
  );
}
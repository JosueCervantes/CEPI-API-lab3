// Composant de la liste des blogs
function BlogList() {
    const [blogs, setBlogs] = React.useState([]); // State pour stocker la liste des blogs
  
    React.useEffect(() => {
      fetch("http://localhost:3000/posts") // Obtenir la liste des posts
        .then(response => response.json())
        .then(data => setBlogs(data)) // Envoyer les données au state
        .catch(error => console.error("Erreur lors du chargement des posts:", error));
    }, []); // S'execute une seule fois
  
    return (
      <div className="container mt-4">
        <div className="row">
          {/* Render the blogs avec map */}
          {blogs.map(blog => (
            // Render chaque blog
            <BlogCard
              key={blog.id} // Utiliser l'id comme key
              id={blog.id}
              titre={blog.titre}
              description={blog.description}
              image={`http://localhost:3000${blog.image}`} 
              auteur={blog.auteur}
            />
          ))}
        </div>
      </div>
    );
  }
  
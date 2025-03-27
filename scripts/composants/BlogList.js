function BlogList() {
    const [blogs, setBlogs] = React.useState([]); // Estado para almacenar los blogs
  
    React.useEffect(() => {
      fetch("http://localhost:3000/posts") // Obtiene los datos de la API
        .then(response => response.json())
        .then(data => setBlogs(data)) // Almacena los datos en `blogs`
        .catch(error => console.error("Erreur lors du chargement des posts:", error));
    }, []); // Se ejecuta solo una vez al montar el componente
  
    return (
      <div className="container mt-4">
        <div className="row">
          {blogs.map(blog => (
            <BlogCard
              key={blog.id} // React necesita un `key` único
              id={blog.id}
              titre={blog.titre}
              description={blog.description}
              image={`http://localhost:3000${blog.image}`} // Asegura la ruta correcta
              auteur={blog.auteur}
            />
          ))}
        </div>
      </div>
    );
  }
  
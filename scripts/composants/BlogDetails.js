function BlogDetails({ postId }) {
    const [blog, setBlog] = React.useState([]);
  
    // Cargar deatalles del blog desde la API cuando se monte el componente
    React.useEffect(() => {
      fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => setBlog(data))
        .catch(error => console.error("Error cargando blog:", error));
    }, [postId]);
  
    return (
      <div>
        <h2>{blog.titre}</h2>
        <p>{blog.description}</p>
        <img src={`http://localhost:3000${blog.image}`} alt={blog.titre} />
        <p>Auteur: {blog.auteur}</p>
      </div>
    );
  }
  
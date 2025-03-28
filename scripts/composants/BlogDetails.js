// Composant BlogDetails
function BlogDetails({ postId }) { //Recoit l'ID du blog
    const [blog, setBlog] = React.useState([]); //State pour stocker le blog
  
    // Charger les details du blog
    React.useEffect(() => {
      fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => setBlog(data))
        .catch(error => console.error("Erreur lors du chargement des details du blog:", error));
    }, [postId]);
  
    return (
      <div>
        {/* Render the blog details */}
        <h2>{blog.titre}</h2>
        <p>{blog.description}</p>
        <img src={`http://localhost:3000${blog.image}`} alt={blog.titre} />
        <p>Auteur: {blog.auteur}</p>
      </div>
    );
  }
  
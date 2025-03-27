function Blog({ postId }) {
  
    const [blog, setBlog] = React.useState([]);

    // Inyectar los detalles del blog desde BlogDetails dentro de Blog
    React.useEffect(() => {
      fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => setBlog(data))
        .catch(error => console.error("Error cargando blog:", error));
    }, [postId]);

    return (
      <div>
            {postId && (
              <>
                <BlogDetails postId={postId} />
              </>
            )}
      </div>
    );
    }
    
    export default Blog;
  
// Composant Blog
function Blog({ postId }) {
    //State pour stocker le blog
    const [blog, setBlog] = React.useState([]);

    // Envoyer les details du blog
    React.useEffect(() => {
      fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => setBlog(data))
        .catch(error => console.error("Erreur lors du chargement des details du blog:", error));
    }, [postId]);

    return (
      <div>
            {/* Render the blog details  avec l'aide du composant BlogDetails*/}
            {postId && ( // Utilise postId comme dependance
              <>
                {/* Utilise postId comme props pour le composant BlogDetails*/}
                <BlogDetails postId={postId} /> 
              </>
            )}
      </div>
    );
    }
    
    export default Blog;
  
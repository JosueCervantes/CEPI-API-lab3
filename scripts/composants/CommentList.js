function CommentList({ postId }) {
    const [comments, setComments] = React.useState([]);
  
    // Cargar comentarios desde la API cuando se monte el componente
    React.useEffect(() => {
      fetch(`http://localhost:3000/comentaires?postId=${postId}`)
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error("Error cargando comentarios:", error));
    }, [postId]);
  
    return (
      <div>
        <h3>Comentarios</h3>
        {comments.length > 0 ? (
          comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              publication_lie={comment.postId}
              contenu={comment.text}
              date={comment.date}
            />
          ))
        ) : (
          <p>No hay comentarios aún.</p>
        )}
      </div>
    );
  }
  
// Composant de la liste des commentaires
function CommentList({ postId }) {
  // State pour stocker les commentaires
    const [comments, setComments] = React.useState([]);
  
    // Charger les commentaires depuis l'API
    React.useEffect(() => {
      fetch(`http://localhost:3000/comentaires?postId=${postId}`)
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error("Erreur lors du chargement des commentaires:", error));
    }, [postId]); // Utiliser postId comme dependance
  
    return (
      <div>
        <h3>Comentarios</h3>
        {/* Render the comments */}
        {comments.length > 0 ? (
        //Map aux commentaires pour les afficher
          comments.map(comment => (
            // Render chaque commentaire
            <Comment
              key={comment.id}
              id={comment.id}
              publication_lie={comment.postId}
              contenu={comment.text}
              date={comment.date}
            />
          ))
        ) : (
          <p>Aucun commentaire encore.</p>
        )}
      </div>
    );
  }
  
function AddComment({ postId, onCommentAdded }) {
    const [comment, setComment] = React.useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Validar que el comentario no esté vacío
      if (!comment.trim()) {
        alert("Le commentaire ne peut pas être vide.");
        return;
      }
  
      // Crear nuevo comentario
      const newComment = {
        text: comment,
        date: new Date().toLocaleString(),
        postId: postId,
      };
  
      // Enviar el comentario a la API
      fetch("http://localhost:3000/comentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
        .then(() => {
          setComment(""); // Limpiar el input
          if (onCommentAdded) {
            onCommentAdded(); // Notificar al padre que se agregó un comentario
          }
        })
        .catch((error) =>
          console.error("Erreur en envoi de commentaire:", error)
        );
    };
  
    return (
      <div>
        <h3>Commentaires</h3>
        <br />
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-2"
            rows="4"
            placeholder="Écris quelque chose"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br></br>
      </div> 
    );
  }
  
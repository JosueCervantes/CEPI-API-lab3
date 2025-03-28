// Composant d'ajout de commentaire
function AddComment({ postId, onCommentAdded }) {
  // State pour stocker le contenu du commentaire
    const [comment, setComment] = React.useState("");
  
    // Fonction pour soumettre le commentaire
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Valider le commentaire qui ne peut pas etre vide
      if (!comment.trim()) {
        alert("Le commentaire ne peut pas être vide.");
        return;
      }
  
      // Créer un nouvel objet de commentaire
      const newComment = {
        text: comment,
        date: new Date().toLocaleString(),
        postId: postId,
      };
  
      // Envoyer le commentaire à l'API
      fetch("http://localhost:3000/comentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
        .then(() => {
          setComment(""); // Effacer le contenu du commentaire
          if (onCommentAdded) {
            onCommentAdded(); // Appeler la fonction de rappel
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
        {/* Formulaire pour ajouter un commentaire */}
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
  
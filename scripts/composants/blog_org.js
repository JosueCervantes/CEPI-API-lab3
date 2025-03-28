// Deuxieme composant pere pour gerer les composants enfants de blog.html
function App() {
  // Obtenir l'ID du post depuis l'URL
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  // Gestion de l'actualisation des commentaires
  const [refreshComments, setRefreshComments] = React.useState(false);
    return (
      <div>
        {/* Composant Header */}
        <Header />
        {/* Composant Barre de recherche*/}
        <Barre />
        {/* Conteneur pour les composant de blog et les commentaires */}
        <div className="container mt-4">
            <div className="row">
            </div>
            {/* On ajoute le postId a Blog et les composants enfants */}
            {postId && (
              <>
                {/* Composant du Blog */}
                <Blog postId={postId} />
                {/* Composant des commentaires du blog*/}
                <CommentList postId={postId} refresh={refreshComments} />
                {/* Composant d'ajout de commentaire */}
                <AddComment postId={postId} onCommentAdded={() => setRefreshComments(!refreshComments)} />
                {/* Composant d'example de commentaire */}
                <Comment
                id={2} 
                publication_lie="Deuxieme post"
                contenu="Un thriller captivant sur le monde de l'élite britannique."
                date="2024-02-28T12:34:56Z"
                />
              </>
            )}
        </div>
        {/* Composant Footer */}
        <Footer />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
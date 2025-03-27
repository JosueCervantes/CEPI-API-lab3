function App() {
    const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  // Estado para actualizar la lista de comentarios
  const [refreshComments, setRefreshComments] = React.useState(false);
    return (
      <div>
        <Header />
        <Barre />
        <div className="container mt-4">
            <div className="row">
            </div>
            {postId && (
              <>
                <Blog postId={postId} />
                <CommentList postId={postId} refresh={refreshComments} />
                <AddComment postId={postId} onCommentAdded={() => setRefreshComments(!refreshComments)} />
                <Comment
                id={2} 
                publication_lie="Deuxieme post"
                contenu="Un thriller captivant sur le monde de l'élite britannique."
                date="2024-02-28T12:34:56Z"
                />
              </>
            )}
        </div>
        <Footer />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
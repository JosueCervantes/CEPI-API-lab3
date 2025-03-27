function App() {
    return (
      <div>
        <Header />
        <Barre />
        <div className="container mt-4">
            <div className="row">
            <Comment
                id={2} 
                publication_lie="Deuxieme post"
                contenu="Un thriller captivant sur le monde de l'élite britannique."
                date="2024-02-28T12:34:56Z"
            />
            <CommentList />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
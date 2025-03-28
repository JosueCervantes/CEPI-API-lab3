// Premier composant pere pour gerer les composants enfants de index.html
function App() {
  return (
    <div>
      {/* Composant Header */}
      <Header />
      {/* Composant Barre de recherche*/}
      <Barre />
      {/* Conteneur pour les composant de blog */}
      <div className="container mt-4">
        <div className="row">
          {/* Composant d'example BlogCard */}
          <BlogCard
            id={2}
            titre="Saltburn"
            description="Un thriller captivant sur le monde de l'élite britannique."
            image="/media/image-1743016737044.jpg"
            auteur="Emerald Fennell"
          />
          {/* Composant BlogList pour afficher la liste des blogs */}
          <BlogList />
        </div>
      </div>
      {/* Composant Footer */}
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div>
      <Header />
      <Barre />
      <div className="container mt-4">
        <div className="row">
          <BlogCard
            id={2}
            titre="Saltburn"
            description="Un thriller captivant sur le monde de l'élite britannique."
            image="/media/image-1743016737044.jpg"
            auteur="Emerald Fennell"
          />
          <BlogList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

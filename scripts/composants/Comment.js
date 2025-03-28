// Composant de commentaire d'example
function Comment({ id, publication_lie, contenu, date }) {
    return (
      <div className="col-md-4 mb-4">
        <div class="d-flex align-items-center gap-3 mb-3">
            <img src={"/media/profile.png"} className="rounded-circle" style={{width: 50, height: 50}} />
                <div>
                  {/* Contenu du commentaire */}
                    <small>{date}</small>
                    <p>{contenu}</p>
                </div>
        </div>
      </div>
    );
  } 
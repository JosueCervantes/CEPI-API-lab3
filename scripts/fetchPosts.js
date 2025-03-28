// Gestioner les posts et les afficher sur la page d'accueil
$(document).ready(function () {
    let postsContainer = $("#postsContainer"); // Set le conteneur correct
    if (postsContainer.data("loaded")) return; // Evite execution automatique
    postsContainer.data("loaded", true);

    $.ajax({
        url: "http://localhost:3000/posts",
        type: "GET",
        success: function(posts) {
            postsContainer.empty();

            console.log("Posts charges:", posts); // Debugging

            posts.forEach(post => {
                // Set l'url de l'image
                let imageUrl = post.image.src = `http://localhost:3000${post.image}`;
                // Créer la carte
                let card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="http://localhost:3000${post.image}" class="card-img-top" alt="${post.titre}">
                            <div class="card-body">
                                <h5 class="card-title">${post.titre}</h5>
                                <p class="card-text">${post.description}</p>
                                <p class="card-text"><strong>Auteur:</strong> ${post.auteur || "Anonyme"}</p>
                                <a href="blog.html?id=${post.id}" class="btn" style="background-color: #00ADB5">Voir plus</a>
                            </div>
                        </div>
                    </div>
                `;
                // Ajoute la carte au conteneur
                postsContainer.append(card);
            });
        },
        error: function(xhr, status, error) {
            console.error("Erreur lors du chargement des posts:", error);
            alert("Erreur lors du chargement des posts.");
        }
    });
});

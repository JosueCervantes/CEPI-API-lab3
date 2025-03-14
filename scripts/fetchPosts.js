$(document).ready(function () {
    let postsContainer = $("#postsContainer"); // Set le conteneur correct

    if (postsContainer.data("loaded")) return; // Evite execution automatique
    postsContainer.data("loaded", true);

    $.ajax({
        // URL de l'API
        url: "http://localhost:3000/posts",
        // Method
        type: "GET",
        success: function (posts) {
            postsContainer.empty(); // Effacer anciens cartes

            // Montrer les nouvelles cartes
            posts.forEach(post => {
                // Créer la carte avec HTML
                let card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${post.image || '/media/fotoblog.jpg'}" class="card-img-top" alt="Blog">
                            <div class="card-body">
                                <h5 class="card-title">${post.titre}</h5>
                                <p class="card-text">${post.description}</p>
                                <p class="card-text"><strong>Auteur:</strong> ${post.auteur || "Anonyme"}</p>
                                <a href="blog.html?id=${post.id}" class="btn" style="background-color: #00ADB5">Voir plus</a>
                            </div>
                        </div>
                    </div>
                `;
                document.getElementById("postsContainer").innerHTML += card;
            });
        },
        error: function () {
            // Gestion de l'erreur
            alert("Erreur lors du chargement des posts.");
        }
    });
});

$(document).ready(function () {
    let postsContainer = $("#postsContainer"); // Set le conteneur correct

    if (postsContainer.data("loaded")) return; // Evite execution automatique
    postsContainer.data("loaded", true);

    $.ajax({
        url: "http://localhost:3000/posts",
        type: "GET",
        success: function(posts) {
            postsContainer.empty();
    
            posts.forEach(post => {
                let imageUrl = post.image ? `http://localhost:3000${post.image}` : "/media/fotoblog.jpg";
                
                let card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${imageUrl}" class="card-img-top" alt="Blog">
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
        error: function() {
            alert("Erreur lors du chargement des posts.");
        }
    });
    
});

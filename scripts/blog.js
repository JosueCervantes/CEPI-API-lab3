document.addEventListener("DOMContentLoaded", function() {
    // Obtenir el ID del post
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    if (!postId) {
        alert("Post not founf");
        window.location.href = "index.html"; // Redirifer vers la page d'accueil s'il existe un id
        return;
    }

    // Faire le requête pour obtenir le post
    fetch(`http://localhost:3000/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        document.getElementById("post-titre").textContent = post.titre;
        document.getElementById("post-description").textContent = post.description;
        document.getElementById("post-image").src = post.image;
        document.getElementById("post-auteur").textContent = post.auteur;
        })
        .catch(error => {
            // Gestion de l'erreur
            console.error("Error al obtener el post:", error);
            alert("No se pudo cargar el post.");
        });

    // Comentaires
    function loadComments() {
        //Faire la requête
        fetch(`http://localhost:3000/comentaires?postId=${postId}`)
            .then(response => response.json())
            .then(comments => {
                const commentsContainer = document.getElementById("comments-list");
                commentsContainer.innerHTML = ""; // Effacer les anciens commentaires
                comments.forEach(comment => {
                    //Fonctions HTML pour les comentaires
                    const commentElement = document.createElement("div");
                    commentElement.classList.add("d-flex", "align-items-center", "gap-3", "mb-3");
                    commentElement.innerHTML = `
                    <img src="/media/profile.png" class="rounded-circle" style="width: 50px; height: 50px;">
                    <div>
                        <small>${new Date(comment.date).toLocaleString()}</small>
                        <p>${comment.text || "Sans contenu"}</p>
                    </div>
                `;
                //Ajouter le commentaire
                commentsContainer.appendChild(commentElement);
                });
            })
            // Gestion de l'erreur
            .catch(error => console.error("Erreur en chargement des commentaires:", error));
    }

    loadComments(); // On appele la fonction pour afficher les commentaires

    // Envoyer un nouveau commentaire
    document.getElementById("comment-form").addEventListener("submit", function(event) {
        // Eviter envoie automatiquement
        event.preventDefault();
        //Verification
        const commentText = document.getElementById("comment-text").value.trim();
        if (!commentText) {
            alert("Le comentaire ne peut pas etre vide.");
            return;
        }

        //Nouveau commentaire
        const newComment = {
            text: commentText,
            date: new Date().toLocaleString(), // Date automatiquement
            postId: postId
        };

        // Envoi de la requête
        fetch("http://localhost:3000/comentaires", {
            //Method
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment)
        })
        .then(response => response.json())
        .then(() => {
            document.getElementById("comment-text").value = ""; // Effacer l'input
            loadComments(); // Recharger les commentaires
        })
        // Gestion de l'erreur
        .catch(error => console.error("Erreur en envoi de commentaire:", error));
    });
});

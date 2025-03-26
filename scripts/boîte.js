$(document).ready(function() {
    $("#blogForm").submit(function(event) {
        event.preventDefault();
    
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 800,
            modal: true,
            buttons: {
                "Oui, envoyer": function() {
                    $(this).dialog("close");
    
                    let titre = $("#title").val();
                    let auteur = $("#auteur").val();
                    let description = $("#description").val();
                    let date = new Date().toISOString();
                    let imageFile = $("#image")[0].files[0];
    
                    if (imageFile) {
                        let formData = new FormData();
                        formData.append("image", imageFile);
    
                        // Subir la imagen al servidor
                        fetch("http://localhost:3000/upload", {
                            method: "POST",
                            body: formData
                        })
                        .then(response => response.json())
                        .then(data => {
                            let imageUrl = data.url; // La API devuelve la ruta de la imagen guardada
                            enviarDatos({ titre, auteur, description, date, image: imageUrl });
                        })
                        .catch(error => console.error("Error al subir la imagen:", error));
                    } else {
                        enviarDatos({ titre, auteur, description, date, image: "" });
                    }
                },
                "Annuler": function() {
                    $(this).dialog("close");
                }
            }
        });
    });    


    function enviarDatos(postData) {
        $.ajax({
            // URL de l'API
            url: "http://localhost:3000/posts",
            // Method
            type: "POST",
            contentType: "application/json", // Envoyer le données en JSON
            data: JSON.stringify(postData), // Conversion d'objet en JSON
            success: function(response) {
                console.log("Post crée avec success:", response); // Verification
                alert("Formulaire envoyé avec succès !"); //Alert de confirmation
                window.location.href = "index.html"; // Rediriger vers la page d'accueil
            },            
            error: function() {
                alert("Erreur lors de l'envoi du formulaire.");
                // Gestion de l'erreur
            }
        });
    }
});

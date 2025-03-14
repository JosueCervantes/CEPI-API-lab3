$(document).ready(function() {
    $("#blogForm").submit(function(event) {
        event.preventDefault(); // Eviter envoie automatiquement

        // Verification de JQUERY
        if (typeof $.ui === "undefined") {
            alert("Erreur : jQuery UI ne semble pas être chargé.");
            return;
        }

        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 800,
            modal: true,
            buttons: {
                "Oui, envoyer": function() {
                    $(this).dialog("close"); // Fermer le dialogue

                    // Obtenir les données du formulaire
                    let titre = $("#title").val();
                    let auteur = $("#auteur").val();
                    let description = $("#description").val();
                    let date = new Date().toISOString(); // Date automatiquement
                    let imageFile = $("#image")[0].files[0];

                    // Function pour converser l'image a un file base 64
                    function convertirImagenABase64(file, callback) {
                        let reader = new FileReader();
                        reader.onloadend = function() {
                            callback(reader.result); 
                        };
                        reader.readAsDataURL(file);
                    }

                    // Envoyer les donnés avec l'image
                    if (imageFile) {
                        convertirImagenABase64(imageFile, function(imageBase64) {
                            enviarDatos({ titre, auteur, description, date, image: imageBase64 });
                        });
                    } else {
                        enviarDatos({ titre, auteur, description, date, image: "" });
                    }
                },
                "Annuler": function() {
                    $(this).dialog("close"); // Fermer sans envoyer
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

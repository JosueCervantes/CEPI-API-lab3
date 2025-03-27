function CommentList({ postId }) {
    const [comments, setComments] = React.useState([]); // Estado para almacenar los comentarios

    React.useEffect(() => {
        fetch(`http://localhost:3000/comentaires?postId=${postId}`) // Obtiene los comentarios filtrados por ID de post
            .then(response => response.json())
            .then(data => setComments(data)) // Almacena los comentarios en `comments`
            .catch(error => console.error("Error al cargar comentarios:", error));
    }, [postId]); // Se actualiza cuando cambia el ID del post

    return (
        <div className="container mt-4">
            <h3>Comentarios</h3>
            {comments.length > 0 ? (
                comments.map(comment => (
                    <Comment
                        key={comment.id} // Clave única para cada comentario
                        contenu={comment.contenu}
                        date={comment.date}
                        profileImage="/media/profile.png"
                    />
                ))
            ) : (
                <p>No hay comentarios aún.</p>
            )}
        </div>
    );
}

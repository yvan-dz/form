document.getElementById('designForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(this);

    // Envoyer les données à Formspree
    fetch('https://formspree.io/f/xvgoopbo', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Formulaire envoyé avec succès !');
            document.getElementById('designForm').reset();  // Réinitialiser le formulaire après envoi
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    }).catch(error => {
        alert('Une erreur s\'est produite lors de l\'envoi. Veuillez vérifier votre connexion.');
    });
});

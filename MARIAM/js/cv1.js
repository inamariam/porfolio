// Déclaration des identifiants de connexion corrects
const correctUsername = "Mariam"; // Nom d'utilisateur correct
const correctPassword = "Mariam"; // Mot de passe correct

// Sélectionne le formulaire de connexion dans le document HTML
const loginForm = document.getElementById("loginForm"); // Récupère l'élément du formulaire par son id
const errorMessage = document.getElementById("error-message"); // Récupère l'élément qui affiche le message d'erreur

// Ajoute un écouteur d'événement pour l'événement "submit" sur le formulaire de connexion
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

  // Récupère les valeurs saisies par l'utilisateur dans les champs du formulaire
  const username = document.getElementById("username").value; // Récupère la valeur du champ "username"
  const password = document.getElementById("password").value; // Récupère la valeur du champ "password"

  // Vérifie si les identifiants saisis correspondent aux identifiants corrects
  if (username === correctUsername && password === correctPassword) {
    // Si l'utilisateur et le mot de passe sont corrects, redirige vers la page "cv.html"
    window.location.href = "cv.html"; // Redirige l'utilisateur vers une autre page
  } else {
    // Si les identifiants ne sont pas corrects, affiche le message d'erreur
    errorMessage.style.display = "block"; // Rend l'élément du message d'erreur visible
  }
});

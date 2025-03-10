// Sélection du bouton "project" et ajout d'un événement de clic pour naviguer vers la section des projets
let bouttonProject = document.getElementById('project');
bouttonProject.addEventListener('click', () => {
  window.location.href = "#perso"; // Redirige vers l'élément avec l'id "perso"
});

// Sélection du bouton "Apropos" et ajout d'un événement de clic pour naviguer vers la section des compétences
let bouttonApropos = document.getElementById('Apropos');
bouttonApropos.addEventListener("click", () => {
bouttonApropos.style.backgroundColor="red";
  
});

// Sélection du bouton "contact" et ajout d'un événement de clic pour effectuer un défilement en douceur vers la section contact
let bouttoncontact = document.getElementById("contact");
bouttoncontact.addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById('contacter').offsetTop,
    behavior: 'smooth' // Défilement fluide
  });
});

// Changement de la couleur de fond du bouton "decouverte" lorsqu'on le survole
let bouttondecouverte = document.getElementById("decouverte");
bouttondecouverte.addEventListener('click', () => {
  window.location.href="cv2.html" 
});

// Sélection du bouton "language" et ajout d'un événement de clic pour naviguer vers la liste des langues
let bouttonlanguage = document.getElementById('language');
bouttonlanguage.addEventListener("click", () => {
  window.location.href = "#container"; // Redirige vers l'élément avec l'id "container"
});

// Animation de l'apparition de la présentation (texte) lors du survol
document.querySelector('.para1').addEventListener('mouseover', () => {
  document.querySelector('.para1').style.transition = 'all 1.5s ease'; // Définit la transition
  document.querySelector('.para1').style.transform = 'translateY(-10px)'; // Applique la transformation
  document.querySelector('.para1').style.opacity = '1'; // Modifie l'opacité
});

// Animation des compétences lors du survol
const competenceElements = document.querySelectorAll('.competence');
competenceElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
      element.style.transition = 'all 1.5s ease'; // Définit la transition
      element.style.transform = 'scale(1.1)'; // Agrandit légèrement l'élément
      element.style.opacity = '1'; // Modifie l'opacité
  });

  // Réinitialisation de l'animation lorsque la souris quitte l'élément
  element.addEventListener('mouseout', () => {
      element.style.transform = 'scale(1)'; // Réinitialise la taille de l'élément
  });
});

// Animation des projets lors de leur apparition (au chargement de la page)
document.addEventListener('DOMContentLoaded', () => {
  const projectImages = document.querySelectorAll('.project img');
  projectImages.forEach((img) => {
      img.style.transition = 'transform 1.5s ease'; // Définit la transition
      img.style.transform = 'translateX(0) scale(1.05)'; // Applique la transformation initiale
  });
});

// Animation des icônes de réseaux sociaux lors du survol
const socialIcons = document.querySelectorAll('.social-media-icons img');
socialIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
      icon.style.transition = 'transform 0.5s ease'; // Définit la transition
      icon.style.transform = 'rotate(45deg) scale(1.1)'; // Tourne et agrandit légèrement l'icône
  });

  // Réinitialisation de l'animation lorsque la souris quitte l'icône
  icon.addEventListener('mouseout', () => {
      icon.style.transform = 'rotate(0) scale(1)'; // Réinitialise la transformation
  });
});

// Filtrage des langues dans la liste selon la saisie utilisateur
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  let searchTerm = e.target.value.toLowerCase(); // Récupère la valeur saisie et la convertit en minuscule

  let languageCollection = document.getElementsByClassName("sublist1");
  for (let i = 0; i < languageCollection.length; i++) {
      const itemText = languageCollection[i].textContent.toLowerCase(); // Récupère le texte de chaque élément

      // Affiche ou masque l'élément en fonction de la correspondance
      if (itemText.includes(searchTerm)) {
          languageCollection[i].style.display = "list-item"; // Affiche l'élément
      } else {
          languageCollection[i].style.display = "none"; // Masque l'élément
      }
  }
});

// Définition des produits disponibles
const products = [
  { id: 1, name: "icone de jeux video", price: 1000, img: "../MARIAM/image/vue-du-controleur-jeu-video-3d_23-2151005776.jpg" },
  { id: 2, name: "icone de css", price: 2000, img: "../MARIAM/image/png-transparent-css-logo.png" },
  { id: 3, name: "icone de python", price: 1400, img: "../MARIAM/image/Python-Logo-PNG-Image.png" },
];

// Initialisation du panier
const cart = [];

// Fonction pour afficher les produits sur la page
function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.style.maxWidth = "100%";
    productCard.style.height = "auto";
    productCard.style.marginBottom = "10px";

    // Structure HTML de chaque carte produit
    productCard.innerHTML = `
      <img src="${product.img}" class="card-img-top" alt="${product.name}" style="width: 100%; height: auto; max-height: 200px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Prix: ${product.price} €</p>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
      </div>
    `;
    
    productList.appendChild(productCard);
  });
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product); // Ajoute le produit au tableau du panier
    displayCart(); // Met à jour l'affichage du panier
  }
}

// Fonction pour afficher le contenu du panier
function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Vide le contenu existant

  // Ajoute chaque élément du panier à la liste
  cart.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.className = "list-group-item d-flex justify-content-between align-items-center";
    cartItem.innerHTML = `
      ${item.name} - ${item.price} €
      <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Retirer</button>
    `;
    cartList.appendChild(cartItem);
  });
}

// Fonction pour retirer un produit du panier
function removeFromCart(index) {
  cart.splice(index, 1); // Supprime l'élément à l'index spécifié
  displayCart(); // Met à jour l'affichage du panier
}

// Affiche les produits lors du chargement de la page
document.addEventListener("DOMContentLoaded", displayProducts);

const produtos = [
    { nome: "Tênis Nike Air Max", preco: 199.99, avaliacao: 4.5 },
];

produtos.forEach(produto => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>Preço: R$${produto.preco.toFixed(2)}</p>
      <p>Avaliações: ${produto.avaliacao} (100)</p>
    `;
    listaProdutos.appendChild(li);
});

function scrollCarousel(button, direction) {
    const container = button.parentElement.querySelector('.card-container');
    const cardWidth = container.querySelector('.card').offsetWidth + 20;
    container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.card').forEach(card => {
    const images = card.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    card.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });
});

function toggleFavorite() {
    var favoriteIcon = document.getElementById("favorite-icon");

    if (favoriteIcon.src.includes("heart.png")) {
        favoriteIcon.src = "../img/heart_hover.png"; 
    } else {
        favoriteIcon.src = "../img/heart.png";
    }
}


function toggleCart() {
    var cartIcon = document.getElementById("cart-icon");

    if (cartIcon.src.includes("shopping-cart.png")) {
        cartIcon.src = "../img/shopping-cart_hover.png"; 
    } else {
        cartIcon.src = "../img/shopping-cart.png";
    }
}

function changeImage(element) {
    const mainImage = document.getElementById('main-image');
    mainImage.classList.add('fade-in');

    mainImage.src = element.src;

    mainImage.addEventListener('animationend', () => {
        mainImage.classList.remove('fade-in');
    }, {once: true}); 
}

const profileIcon = document.getElementById('profile-icon');
const dropdownMenu = document.getElementById('profile-dropdown');

profileIcon.addEventListener('click', () => {
    const isMenuVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isMenuVisible ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});





// Список продуктов
const products = [
    { id: 1, name: 'Ваниль', price: 250, image: 'images/vanilla.png' },
    { id: 2, name: 'Фисташка', price: 300, image: 'images/pistachio.png' },
    { id: 3, name: 'Малина', price: 250, image: 'images/raspberry.png' },
  ];
  
  // Функция для отображения продуктов
  function renderProducts() {
    const productsList = document.getElementById('products');
    productsList.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} дин.</p>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
      `;
      productsList.appendChild(productElement);
    });
  }
  
  // Функция для добавления товара в корзину
  const cart = [];
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      renderCart();
    }
  }
  
  // Функция для отображения корзины
  function renderCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.innerText = `${item.name} - ${item.price} дин.`;
      cartList.appendChild(cartItem);
    });
  }
  
  // Оформление заказа
  document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
      alert('Спасибо за заказ! Мы скоро с вами свяжемся.');
      // Можно тут отправить заказ администратору через API
    } else {
      alert('Корзина пуста!');
    }
  });
  
  // Инициализация
  renderProducts();
  
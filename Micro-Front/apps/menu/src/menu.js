import './styles.css';


export function renderMenu(addToCart) {
  // Main landmark for screen readers
  const section = document.createElement('section');
  section.setAttribute('aria-label', 'Food Menu');
  section.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-amber-50 min-h-screen";

  const foods = [
    { id: 1, name: 'Burger', price: 10, emoji: '🍔', description: 'Juicy beef patty with fresh toppings' },
    { id: 2, name: 'Pizza', price: 15, emoji: '🍕', description: 'Wood-fired with mozzarella and basil' },
    { id: 3, name: 'Sushi', price: 20, emoji: '🍣', description: 'Fresh nigiri and maki selection' },
  ];

  foods.forEach(food => {
    const card = document.createElement('article'); // semantic: it's a self-contained item
    card.className = "bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-3";

    card.innerHTML = `
      <span class="text-5xl" role="img" aria-label="${food.name}">${food.emoji}</span>
      <h2 class="text-xl font-bold text-gray-900">${food.name}</h2>
      <p class="text-gray-500 text-sm flex-1">${food.description}</p>
      <div class="flex items-center justify-between mt-2">
        <span class="text-lg font-semibold text-amber-600" aria-label="Price: $${food.price}">$${food.price}</span>
        <button
          class="bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 text-white font-semibold px-4 py-2 rounded-xl transition-colors duration-200"
          aria-label="Add ${food.name} to cart"
        >
          Add to cart
        </button>
      </div>
    `;


    // Wire up the button to pass this food item up to the cart via the callback
    card.querySelector('button').onclick = () => addToCart(food);

    section.appendChild(card); 
  });

  return section; 
}
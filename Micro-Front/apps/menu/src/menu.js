import './styles.css';

// Renders the food menu and returns the container element.
// Accepts `addToCart` — a callback from the cart module — so each card can trigger cart updates.
export function renderMenu(addToCart) {

  // Responsive grid: 1 col on mobile, 2 on small screens, 3 on medium and up
  const container = document.createElement('div');
  container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen";
  // ⚠️ Fixed: 'sm:grid-cols2' → 'sm:grid-cols-2' (missing hyphen)

  // Menu data — could later be fetched from an API
  const foods = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
    { id: 3, name: 'Sushi', price: 20 },
  ];

  foods.forEach(food => {
    // Individual food card with hover shadow effect
    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition";
    // ⚠️ Fixed: 'p4' → 'p-4' (missing hyphen)

    // Inject the card's content — name, price, and an Add button
    card.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">${food.name}</h3>
      <p class="text-gray-600 mb-4">$${food.price}</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add</button>
    `;

    // Wire up the button to pass this food item up to the cart via the callback
    card.querySelector('button').onclick = () => addToCart(food);

    container.appendChild(card);
  });

  return container;
}
import './styles.css';

// Creates and manages the cart UI. Returns the cart's DOM element and an `add` function
// so external modules (like the menu) can push items into it.
export function createCart() {
  let items = []; // Internal state — holds all items added to the cart

  // The cart's persistent DOM container — stays in the layout, gets re-rendered on updates
  const container = document.createElement('div');
  container.className = "flex-1 p-5 bg-white border-l border-gray-200 min-h-screen shadow-inner";

  // Re-renders the cart contents from scratch whenever items change
  function render() {
    container.innerHTML = '';

    // Cart heading
    const heading = document.createElement('h2');
    heading.className = "text-xl font-bold mb-4 text-gray-800";
    heading.innerText = 'Cart';
    container.appendChild(heading);

    // Render each item as a row
    items.forEach(item => {
      const el = document.createElement('p');
      el.className = "text-gray-700 py-1 border-b border-gray-100";
      el.innerText = `${item.name} - $${item.price}`;
      container.appendChild(el);
    });

    // Calculate and display the total price
    const total = items.reduce((sum, i) => sum + i.price, 0);
    const totalEl = document.createElement('strong');
    totalEl.className = "block mt-4 text-lg text-gray-900";
    totalEl.innerText = `Total: $${total}`;
    container.appendChild(totalEl);
  }

  // Adds an item to the cart and triggers a re-render
  function add(item) {
    items.push(item);
    render();
  }

  render(); // Initial render so the cart isn't empty on load

  // Expose the DOM element and the add function — that's all outside modules need
  return { el: container, add };
}
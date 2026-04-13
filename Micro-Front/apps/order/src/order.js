import './styles.css';

// Creates and manages the cart UI. Returns the cart's DOM element and an `add` function
// so external modules (like the menu) can push items into it.
export function createCart() {
  let items = []; // Internal state — holds all items added to the cart

  // The cart's persistent DOM container — stays in the layout, gets re-rendered on updates
  const container = document.createElement('aside'); // semantic: complementary content
  container.setAttribute('aria-label', 'Shopping Cart');
  container.className = "w-80 min-h-screen bg-white border-l border-gray-200 p-6 flex flex-col shadow-inner";

 // Re-renders the cart contents from scratch whenever items change
  function render() {
    container.innerHTML = '';

 // Cart heading
    const heading = document.createElement('h2');
    heading.className = "text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100";
    heading.innerText = '🛒 Your Cart';
    container.appendChild(heading);

 // Empty state
    if (items.length === 0) {
      const empty = document.createElement('p');
      empty.className = "text-gray-400 text-sm text-center mt-8";
      empty.setAttribute('aria-live', 'polite');
      empty.innerText = 'Your cart is empty. Add some items!';
      container.appendChild(empty);
    }

    // Item list — announced to screen readers on update
    const list = document.createElement('ul');
    list.setAttribute('aria-live', 'polite');
    list.setAttribute('aria-label', 'Cart items');
    list.className = "flex flex-col gap-3 flex-1";

    items.forEach(item => {
      const li = document.createElement('li');
      li.className = "flex justify-between items-center py-2 border-b border-gray-100 text-gray-700";
      li.innerHTML = `
        <span>${item.emoji} ${item.name}</span>
        <span class="font-medium text-amber-600">$${item.price}</span>
      `;
      list.appendChild(li);
    });
    
    // Calculate and display the total price
    const total = items.reduce((sum, i) => sum + i.price, 0);
    const totalEl = document.createElement('div');
    totalEl.className = "mt-6 pt-4 border-t border-gray-200 flex justify-between items-center";
    totalEl.innerHTML = `
      <span class="text-gray-700 font-semibold">Total</span>
      <strong class="text-xl text-gray-900" aria-label="Total price: $${total}">$${total}</strong>
    `;
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
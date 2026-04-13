import './styles.css'; 

const app = document.querySelector('#app');
let initialized = false;

async function init() {
  // Guard against init() being called more than once
  if (initialized) return;
  initialized = true;

  try {
    // Dynamically import federated/lazy modules for menu and order
    const menuModule = await import('menu/menu');
    const orderModule = await import('order/order');

    // Extract the functions we need from each module's default export
    const renderMenu = menuModule.default.renderMenu;
    const createCart = orderModule.default.createCart;

    // Outer flex container that holds the menu and cart side by side
    const layout = document.createElement('div');
    layout.className = 'flex min-h-screen';

    // Left section — takes up 2/3 of the space with some padding
    const menuContainer = document.createElement('div');
    menuContainer.className = 'flex-[2] p-5';

    // Initialize the cart — returns the cart element and an `add` function
    const cart = createCart();

    // Render the menu, passing in cart.add so menu items can trigger cart updates
    const menu = renderMenu(cart.add);

    // Assemble the layout
    menuContainer.appendChild(menu);
    layout.appendChild(menuContainer);
    layout.appendChild(cart.el); // cart.el is the cart's DOM element, built inside the order module

    document.querySelector('#app').appendChild(layout);
  } catch (err) {
    // Log any module loading or runtime errors
    console.error('IMPORT ERROR:', err);
  }
}

init();
const app = document.querySelector('#app');
import { styled } from 'ui/styled';
import { theme } from 'ui/theme';

let initialized = false;

async function init() {
  if (initialized) return;
  initialized = true;

  try {
    const menuModule = await import('menu/menu');
    const orderModule = await import('order/order');

    const renderMenu = menuModule.default.renderMenu;
    const createCart = orderModule.default.createCart;

    const layout = document.createElement('div');

    Object.assign(layout.style, {
      display: 'flex',
      fontFamily: 'Arial',
      background: '#f5f5f5',
      minHeight: '100vh',
    });

    const menuContainer = document.createElement('div');
    menuContainer.style.flex = '2';
    menuContainer.style.padding = '20px';

    const cart = createCart();
    const menu = renderMenu(cart.add);

    menuContainer.appendChild(menu);

    layout.appendChild(menuContainer);
    layout.appendChild(cart.el);

    document.querySelector('#app').appendChild(layout);

  } catch (err) {
    console.error('IMPORT ERROR:', err);
  }
}

init();
import { styled } from 'ui/styled';
import { theme } from 'ui/theme';

export function createCart() {
  let items = [];

  const container = document.createElement('div');

  Object.assign(container.style, {
    padding: '16px',
    borderLeft: '2px solid #eee',
    minWidth: '200px',
  });

  function render() {
    container.innerHTML = '<h2>Cart</h2>';

    items.forEach(item => {
      const el = document.createElement('p');
      el.innerText = `${item.name} - $${item.price}`;
      container.appendChild(el);
    });

    const total = items.reduce((sum, i) => sum + i.price, 0);

    const totalEl = document.createElement('strong');
    totalEl.innerText = `Total: $${total}`;
    container.appendChild(totalEl);
  }

  function add(item) {
    items.push(item);
    render();
  }

  render();

  return { el: container, add };
}
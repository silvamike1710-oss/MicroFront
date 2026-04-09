import { styled } from 'ui/styled';
import { theme } from 'ui/theme';

export function renderMenu(addToCart) {
  const container = document.createElement('div');
  
  const foods = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
    { id: 3, name: 'Sushi', price: 20 },
  ];

  foods.forEach(food => {
    const card = document.createElement('div');

    Object.assign(card.style, {
      border: '1px solid #ddd',
      padding: '12px',
      margin: '8px',
      borderRadius: '8px',
      background: '#fff',
    });

    card.innerHTML = `
      <h3>${food.name}</h3>
      <p>$${food.price}</p>
      <button>Add</button>
    `;

    card.querySelector('button').onclick = () => addToCart(food);

    container.appendChild(card);
  });

  return container;
}
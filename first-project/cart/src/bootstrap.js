import { faker } from '@faker-js/faker';

const mount = (element) => {
  const cartText = `<div>You have ${faker.number.int()} items in your cart.</div>`;
  element.innerHTML = cartText;
};

if (
  process.env.NODE_ENV === 'development' &&
  document.body.getAttribute('data-app') === 'cart'
) {
  const element = document.querySelector('#cart-dev');
  mount(element);
}

export { mount };

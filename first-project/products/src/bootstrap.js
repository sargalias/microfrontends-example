import { faker } from '@faker-js/faker';

const mount = (element) => {
  const products = [];

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products.push(name);
  }

  const result = products.map((product) => `<div>${product}</div>`);

  element.innerHTML = result.join('');
};

if (
  process.env.NODE_ENV === 'development' &&
  document.body.getAttribute('data-app') === 'products'
) {
  const element = document.querySelector('#dev-products');
  mount(element);
}

export { mount };

import { faker } from '@faker-js/faker';

const products = [];

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products.push(name);
}

const result = products.map((product) => `<div>${product}</div>`);

document.querySelector('#dev-products').innerHTML = result.join('');

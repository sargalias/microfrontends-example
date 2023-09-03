import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

const productsMountElement = document.querySelector('#my-products');
productsMount(productsMountElement);

const cartMountElement = document.querySelector('#cart-dev');
cartMount(cartMountElement);

console.log('container');

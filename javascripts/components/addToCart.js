import { setCart } from '../helpers/data/cartData.js';
import { makeCheckoutModal } from './modal.js';
import { makeCheckoutIcon } from './checkout.js';

const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
    
    cartButton.on('click', () => {
      setCart(array[index]);
      makeCheckoutModal();
      makeCheckoutIcon();
    })
};

export { addToCart }
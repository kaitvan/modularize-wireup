import { setCart } from '../helpers/data/cartData.js';
import { makeCheckoutModal, chargeIt, showCartItems } from './modalPortion.js';
import { makeCartPortion } from './cartPortion.js';

const makeCart = () => {
  $('#cart').html(`
  ${makeCartPortion()}
  ${makeCheckoutModal()}`);
  $('#charge-it').click(() => {
    const ccNum = $('#credit-card').val();
    chargeIt(ccNum);
  })

  showCartItems();
}

const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
    
    cartButton.on('click', () => {
      setCart(array[index]);
      makeCart();
    })
};

export { addToCart, makeCart }
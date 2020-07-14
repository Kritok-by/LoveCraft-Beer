import "./scss/style.scss";
import {addSales} from './catalog/addSales';
import {cbpAnimatedHeader} from './animations/header';
import {initializeClock} from './timers/timerofsale';
import {main, regLogin, catalogOn, accountOn, aboutUsOn, logOut, burger} from './clickFunctions/displays';
import {catalogProducts} from './catalog/produts';
import {allProducts} from './catalog/addAllproduts';
import {autorisation} from './registration/login';
import {registration} from './registration/reg';
import {editPass} from './registration/editPass';
import {itemPageOn} from './catalog/itemPage';
import {cart} from './catalog/cart';
import {selectsAdd} from './catalog/selectsAdd';
import {filter} from './catalog/filter'
import {swiperOne, swiperTwo, addSwipers} from './slider/mainSlider';





main();
autorisation();
regLogin();
catalogOn();
aboutUsOn();
cbpAnimatedHeader;
allProducts;
cart;
addSales;
filter();
registration();
document.querySelector('.userName').addEventListener('click',accountOn);
editPass();
selectsAdd();
itemPageOn();
logOut();
addSwipers();
burger();
// SALE TIMERS
for (let i = 0; i < catalogProducts.length; i++){
  if(catalogProducts[i].timeout !== ''){
    initializeClock(".timer-of-sale" + catalogProducts[i].id, catalogProducts[i].timeout);
  }
};
console.log(allProducts);
// document.querySelector('.form-log-in').addEventListener('submit', function(event){
//   event.preventDefault();
//   accountOn();
// })
swiperOne;
swiperTwo;

if(document.documentElement.clientWidth < 750){
  swiperTwo.params.slidesPerView = 1;
  swiperTwo.params.spaceBetween = 30;
} else if (document.documentElement.clientWidth < 1150){
  swiperTwo.params.slidesPerView = 2;
  swiperTwo.params.spaceBetween = 10;
}

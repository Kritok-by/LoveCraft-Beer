import {catalogProducts} from './produts';

function itemPageOn(){
  for (let i of document.querySelectorAll('.card')){
    i.addEventListener('click', ()=>{
      document.querySelector('.header').classList.add('other-header');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.wrapper').classList.remove('visible');
      catalogProducts.forEach((item)=>{
        if (item.name === i.querySelector('.name').innerHTML){
          document.getElementById('li-name').innerHTML = item.name;
          document.getElementById('main-name').innerHTML = item.name;
          document.getElementById('li-brewery').innerHTML = item.brewery;
          document.getElementById('li-sort').innerHTML = item.sort;
          document.getElementById('li-alk').innerHTML = item.alk + '%';
          document.getElementById('li-volume').innerHTML = item.volume + 'L';
          document.getElementById('li-price').innerHTML = item.price + '$';
          document.getElementById('item-img').src = item.image;

        }
      })



      document.querySelector('.item-page').classList.add('visible')
    })
  }
}

export {itemPageOn}

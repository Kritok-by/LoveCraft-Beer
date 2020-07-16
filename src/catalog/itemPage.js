import {catalogProducts} from './produts';
import {store} from './addToStash';
import {allProducts} from './addAllproduts';

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
          document.querySelector('.toCart').setAttribute('id', item.id);
          document.querySelector('.item-img').style.backgroundImage = `url('${item.image}')`;
          document.querySelector('.item-img').addEventListener('mousemove', (event)=>{
            let zoomer = event.currentTarget,
            offsetX,
            offsetY;
            event.offsetX ? (offsetX = event.offsetX) : (offsetX = event.touches[0].pageX);
            event.offsetY ? (offsetY = event.offsetY) : (offsetX = event.touches[0].pageX);
            let x = offsetX / zoomer.offsetWidth  * 100;
            let y = offsetY / zoomer.offsetHeight * 100;
            zoomer.style.backgroundPosition = x + "% " + y +"%";
          });

          let summ = 0,
          products = store.getProducts(),
          index = products.indexOf(item.id);
          if (localStorage.getItem("howDollars") !== null) {
            summ = localStorage.getItem("howDollars");
            +summ;
          }

          if (index === -1) {
            document.querySelector('.toCart').innerHTML = "Add";
          } else {
            document.querySelector('.toCart').innerHTML = "Remove";
          }

          document.querySelector('.toCart').addEventListener('click', function(){
            let id = this.getAttribute("id"),
            result = store.putProduct(id);
              for (let dollars of document.querySelectorAll(".stash-dollars")) {
                if (dollars.innerHTML == 0) {
                  dollars.innerHTML = 0;
                }
              }
              allProducts.containerCounter.innerHTML = result.products.length;
              document.querySelector(".burger-stash-meter").innerHTML =
                result.products.length;
              if (result.statusProduct) {
                this.innerHTML = "Remove";
                summ += item.price;
              } else {
                this.innerHTML = "Add";
                summ -= item.price;
              }
              for (let dollars of document.querySelectorAll(".stash-dollars")) {
                dollars.innerText = summ;
              }
              localStorage.setItem("howDollars", summ);
            })
          }
      })
      document.querySelector('.item-page').classList.add('visible')
      console.log('1');
    })
  }
}

export {itemPageOn}

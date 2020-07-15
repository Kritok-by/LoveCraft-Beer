import {swiperOne, swiperTwo} from '../slider/mainSlider';
import {cbpAnimatedHeader} from '../animations/header';
import { allProducts } from '../catalog/addAllproduts';

function main(){

  for (let i of document.querySelectorAll('.main')){
    i.addEventListener('click', ()=>{
      document.querySelector('.wrapper').classList.add('visible');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.header').classList.remove('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      swiperOne, swiperTwo,
      cbpAnimatedHeader;
      window.scrollTo(0, 0);
    });
  }
  for (let i of document.querySelectorAll('.logo')){
    i.addEventListener('click', ()=>{
      document.querySelector('.wrapper').classList.add('visible');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.header').classList.remove('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      swiperOne, swiperTwo,
      cbpAnimatedHeader;
      window.scrollTo(0, 0);
    });
  }
};

function regLogin(){
  for (let i of document.querySelectorAll('.log-in')){
    i.addEventListener('click', ()=>{
      document.querySelector('.wrapper').classList.remove('visible');
      document.querySelector('.register-form').classList.add('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.header').classList.add('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      window.scrollTo(0, 0);
    })
  }
}

function catalogOn(){
  for (let i of document.querySelectorAll('.catalogOn')){
    i.addEventListener('click', ()=>{
      document.querySelector('.wrapper').classList.remove('visible');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.add('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.header').classList.add('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      window.scrollTo(0, 0);
    })
  }
}

function accountOn(){
  if (document.querySelector('.userName').innerText !== ''){
  document.querySelector('.wrapper').classList.remove('visible');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.add('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.remove('visible-grid');
      document.querySelector('.header').classList.add('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      window.scrollTo(0, 0);
  }
}

function aboutUsOn(){
  for (let i of document.querySelectorAll('.aboutUs')){
    i.addEventListener('click', ()=>{
      document.querySelector('.wrapper').classList.remove('visible');
      document.querySelector('.register-form').classList.remove('visible');
      document.querySelector('.catalogWrapper').classList.remove('visible-grid');
      document.querySelector('.personal-area').classList.remove('visible-grid');
      document.querySelector('.item-page').classList.remove('visible');
      document.querySelector('.about-us-page').classList.add('visible-grid');
      document.querySelector('.header').classList.add('other-header');
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
      window.scrollTo(0, 0);
    });
  }
};

function logOut (){
  document.querySelector('.logut').addEventListener('click',()=>{
    localStorage.removeItem('lastLogin');
    document.querySelector('.userName').innerHTML = '';
    document.querySelector('.wrapper').classList.add('visible');
    document.querySelector('.personal-area').classList.remove('visible-grid');
    document.querySelector('.header').classList.remove('other-header');
    document.getElementById('menu-burger').classList.remove('burger-on');
    document.getElementById('burger-check').checked = false;
    window.scrollTo(0, 0);
  })
}
function burger(){
  document.getElementById('burger-check').addEventListener('click', ()=>{
    if(document.getElementById('menu-burger').classList.contains('burger-on')){
      document.getElementById('menu-burger').classList.remove('burger-on');
      document.getElementById('burger-check').checked = false;
    } else {
      document.getElementById('menu-burger').classList.add('burger-on');
    }
  })
}


export {main, regLogin, catalogOn, accountOn, aboutUsOn, logOut, burger};

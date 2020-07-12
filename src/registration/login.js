import {accountOn} from '../clickFunctions/displays';

function autorisation (){

      if (localStorage.getItem('lastLogin') !== null){
        document.querySelector('.userName').innerHTML = localStorage.getItem('lastLogin') + ' |';
        document.getElementById('user-name').innerHTML = localStorage.getItem('lastLogin');
      }

  document.getElementById('log-button').addEventListener('click',function(){
    let getAcc,
        accObj = {},
        logIN = document.getElementById('log-in').value;



          if (localStorage.getItem("accounts") !== null) {
            getAcc = localStorage.getItem("accounts");
            accObj = JSON.parse(getAcc);
          }
          let login = document.getElementById('log-in').value,
          pass = document.getElementById('log-pass').value;

    if(document.getElementById('log-in').value.trim() === '' || document.getElementById('log-pass').value.trim() === ''){
      alert('заполните все поля')
    } else if (accObj[login] != pass){
      alert('Не правильный логин ил пароль')
    } else {
      localStorage.setItem('lastLogin', login);
      accountOn();
      document.getElementById('user-name').innerHTML = logIN;
      document.querySelector('.userName').innerHTML = logIN + ' |';

      login = '';
      pass = '';

  }
})};

export {autorisation};

import {accountOn} from '../clickFunctions/displays';

function registration(){

    let accountsObj = {};

    document.getElementById('reg-button').addEventListener('click',()=>{
      let getAcc,
          accObj = {};

          if (localStorage.getItem("accounts") !== null) {
            getAcc = localStorage.getItem("accounts");
            accObj = JSON.parse(getAcc);
          }
  if(document.getElementById('reg-login').value === '' || document.getElementById('reg-login').value.trim() === "" || document.getElementById('new-pass').value === '' || document.getElementById('new-pass').value.trim() === "" || document.getElementById('conf-pass').value === '' || document.getElementById('conf-pass').value.trim() === ""){
    alert('заполните все поля')
  } else if (document.getElementById('new-pass').value != document.getElementById('conf-pass').value){
    alert('Пароли не совпадают')
  } else if (document.getElementById('reg-login').value in accObj){
    alert('пользователь с таким логином уже зарегестрирован')
  }else {
    let regLogin = document.getElementById('reg-login').value;
    localStorage.setItem('lastLogin', regLogin);
    accountsObj[regLogin] = document.getElementById('new-pass').value;

    localStorage.setItem("accounts" , JSON.stringify(accountsObj));
    document.querySelector('.userName').innerHTML = regLogin + ' |';
    alert('reg');
    accountOn();
    document.getElementById('reg-login').value = '';
    document.getElementById('new-pass').value = '';
    document.getElementById('conf-pass').value = '';
    document.getElementById('user-name').innerHTML = regLogin;
  }
})}


export {registration};


function editPass(){
  document.getElementById('edit-pass').addEventListener('click', ()=>{

    let getAcc,
          accObj = {};

          if (localStorage.getItem("accounts") !== null) {
            getAcc = localStorage.getItem("accounts");
            accObj = JSON.parse(getAcc);
          }
          let username = document.getElementById('user-name').innerHTML,
          pass = document.getElementById('old-password').value;

    if (accObj[username] != pass){
      alert('Неверный пароль')
      document.getElementById('old-password').value = '';
      document.getElementById('new-password').value = '';

    } else if(document.getElementById('new-password').value === '' || document.getElementById('new-password').value.trim() === '' ){
      alert('Введите новый пароль')
    } else {
      accObj[username] = document.getElementById('new-password').value;
      localStorage.setItem("accounts" , JSON.stringify(accObj));
      document.getElementById('old-password').value = '';
      document.getElementById('new-password').value = '';
    }
  })
}

export {editPass};

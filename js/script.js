var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector ('form');
var email = popup.querySelector('[name=email]');
var storage = localStorage.getItem('login');

link.addEventListener ('click', function(event){
  event.preventDefault();
  popup.classList.add('.modal-content-show');
  login.focus;
});

close.addEventListener ('click', function(event) {
  event.preventDefault();
  popup.classList.remove('.modal-content-show');
});

if (storage) {
  login.value = storage;
}

form.addEventListener ('submit', function(event) {
  if (!login.value||!email.value) {
    event.preventDefault();
    console.log('Нужно ввести логин и e-mail');
  }
  else {
    localStorage.setItem('login', login.value);
  }
});
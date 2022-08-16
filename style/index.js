// function clickMe() {
//   let nameInput = document.getElementById('name');
//   document.getElementById("resultName").value = `Привет, ${nameInput.value}`;
//   document.getElementById("name").value = "";
// }

// function changeMe() {
//   let nameInput = document.getElementById('back');
//   catImage.src = "https://cs12.pikabu.ru/post_img/big/2021/01/28/7/1611832499168550349.jpg";
// }

// function changeMe2() {
//   let nameInput = document.getElementById('forward');
//   catImage.src =
//       "https://twizz.ru/wp-content/uploads/2022/01/1642076061_cd3409d74c8d943b363ae97ca4e6f6e9.jpg";
// }

// function changeColor(sender) {
//   sender.classList.add("bgColor");
// }

// function changeColorTwo(sender) {
//     sender.classList.add("bgColorTwo");
// }

function addMe() {
  let a = document.getElementById('numberOne');
  let b = document.getElementById('numberTwo');
  result = +a.value + +b.value;
  document.getElementById("result").value = result;
}

function subtractMe() {
  let a = document.getElementById('numberOne');
  let b = document.getElementById('numberTwo');
  result = a.value - b.value;
  document.getElementById("result").value = result;
}

function divideMe() {
  let a = document.getElementById('numberOne');
  let b = document.getElementById('numberTwo');
  if (b.value == 0) {
    alert('На ноль делить нельзя!');
  }
  result = a.value / b.value;
  document.getElementById("result").value = result;
}

function multiplyMe() {
  let a = document.getElementById('numberOne');
  let b = document.getElementById('numberTwo');
  result = a.value * b.value;
  document.getElementById("result").value = result;
}

function createAccount() {
    let nameYandex = document.getElementById('name');
    let surnameYandex = document.getElementById('surname');
    let emailYandex = document.getElementById('email');
    let passwordYandex = document.getElementById('password');
    let passwordTwoYandex = document.getElementById('passwordTwo');

    document.getElementById('errorMessage').innerHTML= "";

    if (nameYandex.value == '') {
        document.getElementById('errorMessage').innerHTML+= "Заполни Имя!<br>";
    } 

    if (surnameYandex.value == ''){
        document.getElementById('errorMessage').innerHTML+= "Заполни Фамилию!<br>";
    }

    if (emailYandex.value == ''){
        document.getElementById('errorMessage').innerHTML+= "Заполни email!<br>";
    }

    if (passwordYandex.value == '' || passwordTwoYandex.value == ''){
        document.getElementById('errorMessage').innerHTML+= "Заполни пароль!<br>";
    }

    if (passwordYandex.value.length < 6 || passwordTwoYandex.value.length < 6){
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль меньше 6 символов!<br>";
    }
    
    else {
        alert(`Добро пожаловать, ${nameYandex.value}`);

        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('passwordTwo').value = "";
    }
}

function colorChange() {
    if (document.getElementById('colors').value == "white"){
        document.body.style.backgroundColor = 'white';
    }
    if (document.getElementById('colors').value == "gray"){
        document.body.style.backgroundColor = 'darkgray';
    }
    if (document.getElementById('colors').value == "dark"){
        document.body.style.backgroundColor = 'gray';
    }
}
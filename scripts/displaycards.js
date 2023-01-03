/* PRIMEIRA TENTATIVA

//////////////////////////////////////////////////////////////

function inicialLogin(){
    cardLogin.classList.add('mostrar');
    cardSingUp.classList.remove('mostrar');
    }
function mostrarSingUp(){
    cardLogin.classList.remove('mostrar');
    cardSingUp.classList.add('mostrar');
}
const cardLogin = document.querySelector('.loginpage');
const cardSingUp = document.querySelector('.singuppage');
const botaoMostrarLogin = document.querySelector('.changeToLogin');
const botaoMostrarSingUp = document.querySelector('.changeToSingUp');

inicialLogin();

if (cardLogin.lenght < cardSingUp.lenght){
    botaoMostrarLogin.onclick = inicialLogin;
}
else{
    botaoMostrarSingUp.onclick = mostrarSingUp;
}

//////////////////////////////////////////////////////////////
*/

/* Trocar cards */

function showLogin() {
    cardLogin.remove('hide-card')
    cardSingUp.add('hide-card')
}

function showSingUp() {
    cardSingUp.remove('hide-card');
    cardLogin.add('hide-card')
}


const cardLogin = document.querySelector('.logInPage').classList;
const cardSingUp = document.querySelector('.singUpPage').classList;
const botaoMostrarLogin = document.querySelector('.changeToLogin');
const mostrarSingUp = document.querySelector('.changeToSingUp');

showLogin();
botaoMostrarLogin.onclick = showLogin;
mostrarSingUp.onclick = showSingUp;

/*///////////////////////////////////////////////////////////////////*/
/* Pegando os inputs */

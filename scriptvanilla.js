const btnLogin = document.getElementById('btnLogin');
const modalForm = document.getElementById('loginForm');
const close = document.getElementById('closeBtn');
const pikachu = document.getElementById('pikachu');
btnLogin.addEventListener('click', () => {
    modalForm.style.display = 'block';

});


// button that closes the modal form

close.addEventListener('click', () => {
    modalForm.style.display = 'none';

})

// make pikachu have a sound when being clicked on

pikachu.addEventListener('click', () => {
    const audio = document.getElementById("audio");
    audio.play();
})



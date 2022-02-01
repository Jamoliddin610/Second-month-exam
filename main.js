let openModalBox = document.getElementById('openModalbtn');
let closeModalBox = document.getElementById('closeModalbtn');
let modalBox = document.getElementById('ModalBox');

openModalBox.addEventListener('click', function() {
    modalBox.classList.add('show');
})

closeModalBox.addEventListener('click', function() {
    modalBox.classList.remove('show');
    console.log('ok');
})
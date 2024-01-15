
let openDialog = document.getElementById('openDialog');
let closeDialog = document.getElementById('closeDialog');
let favDialog = document.getElementById('favDialog');

openDialog.addEventListener('click', function () {
    favDialog.showModal();
});

closeDialog.addEventListener('click', function () {
    favDialog.close();
});


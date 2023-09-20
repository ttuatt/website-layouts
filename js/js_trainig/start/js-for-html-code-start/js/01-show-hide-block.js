const button = document.getElementById('button');
const content = document.getElementById('content');

button.addEventListener('click', function(){
    

    if (content.classList.toggle('content-hidden')) {
        button.textContent = 'Открыть блок';
    } else {
        button.textContent = 'Закрыть блок';
    }

    /*
    if (content.classList.contains('content-hidden')) {
        button.textContent = 'Открыть блок';
    } else {
        button.textContent = 'Закрыть блок';
    }
    */
});
const headers = document.querySelectorAll('[data-name = "accordeon-title"]');
function showContent () {
    this.nextElementSibling.classList.toggle('hidden');
}

headers.forEach(function(item) {
   
    item.addEventListener('click', showContent)
})


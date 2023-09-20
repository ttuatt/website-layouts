const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function(item) {
    item.addEventListener('click', function(){
        
        contentBoxes.forEach(function (item){
            item.classList.add('hidden');
        })

        const content =  document.querySelector(`#${this.getAttribute("data-tab")}`);
        content.classList.remove('hidden');
    })
})
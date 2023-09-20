window.onload = () => {
  
  let input = document.getElementById('input');
  input.oninput = function() {
     let value = this.value.trim();
     let listValue = document.querySelectorAll('.ul li');

    if (value) {
     listValue.forEach(elem => {
         if (elem.innerText.search(value) == -1){
            elem.classList.add('hide');
         }
         })
    } else {
         listValue.forEach(elem => {
            elem.classList.remove('hide');
        })
    }
  }  
};


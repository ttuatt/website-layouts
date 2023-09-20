
let isColorChange = true;

const btn = document.getElementById('submit');
let timerId;

btn.addEventListener('click',() => {
  function stop() {
    clearInterval(timerId);
  } 
  function changeColor() {
    let hex_numbers = 
    [ "0","1","2","3","4",
      "5","6","7","8","9",
      "A","B","C","D","E","F"];
  
    let hexcode = '';
    let hex_numbers1 = 
    [ "0","1","2","3","4",
      "5","6","7","8","9",
      "A","B","C","D","E","F"];
  
    let hexcode1 = '';
  
    for (let i = 0; i < 6; i++) {
        let random_idex = Math.floor(Math.random()
        * hex_numbers.length);
        hexcode+=hex_numbers[random_idex];
    }
    for (let i = 0; i < 6; i++) {
        let random_idex = Math.floor(Math.random()
        * hex_numbers1.length);
        hexcode1+=hex_numbers[random_idex];
    }
    
    document.getElementById('hex-code').innerHTML = hexcode;
    document.getElementById('hex-code1').innerHTML = hexcode1;
    document.getElementsByTagName('body')[0].style.background = `linear-gradient(to right, #${hexcode}, #${hexcode1})`;
  }

  if (!isColorChange) {
    stop();
    isColorChange = true;
    //console.log('stop', isColorChange);
    btn.innerHTML='Start';
  } else {
    timerId = setInterval(changeColor,5000);
    isColorChange = false;
    //console.log('start', isColorChange);
    btn.innerHTML='Stop';
  }

})

  





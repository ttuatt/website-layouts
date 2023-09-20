const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid');[0];
window.addEventListener('load',dayNightMode);

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      loadImg();  
    }
})

function loadImg() {
    //console.log(input.value);
    removeImg();
    const url = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=9&
    client_id=bi3nZi97t_wEdzEagTWD6PXHH2nnZcG1GJDzMxdhLs4`;
    fetch(url)

    .then(response =>{
        if(response.ok)
            return response.json();
        else
        alert(response.status)
    })

    .then(data => {
        const imagesNodes =[]
        for(let i = 0; i< data.results.lenght; i++){
            imagesNodes[i] = document.createElement('div');
            imagesNodes[i].className = 'img';
            imagesNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`
            imagesNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.download, '_blank')
            })
            grid.appenChild(imagesNodes[i]);
        }
    })
}
function removeImg() {
    grid.innerHTML = '';
}
function dayNightMode() {
    const date = new Date();
    let hour = date.getHours();
    if (hour >= 7 && hour <= 19){
        document.body.style.background = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }
    
}

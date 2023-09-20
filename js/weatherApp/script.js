const link = 'http://api.weatherstack.com/current?access_key=8333ad647251378b0c62034700ae562e';

const root = document.getElementById('root');
const popup = document.getElementById('popup');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');


let store = {
    city: 'Saint-Petersburg',
    temperature: 0,
    observationTime:'00:00 AM',
    isDay: 'yes',
    description: '', 
    
    properties: {
      cloudcover: {},
      humidity: {},
      windSpeed: {},
      visibility:{},
      uvIndex: {},
      pressure: {},
    }
}

const fetchData = async () => {
    try {
      const query = localStorage.getItem('query') || store.city;
      const result = await fetch(`${link}&query=${query}`);
      const data = await result.json();
      console.log(data)
      const  {
          current:{
              cloudcover,
              temperature, 
              humidity,
              observation_time: time,
              pressure,
              uv_index:uvIndex,
              visibility,
              is_day:isDay,
              weather_descriptions: description, 
              wind_speed:windSpeed,
          },
          location: {
            name
          }
      } = data;

      store = {
          ...store,
          isDay,
          city:name,
          temperature,
          observationTime: time,
          description: description[0],
          properties: {
            cloudcover: {
              title:'cloudcover',
              value: `${cloudcover}%`,
              icon: 'cloud.png',
            },
            humidity: {
              title:'humidity',
              value:`${humidity}%`,
              icon:'humidity.png'
            },
            windSpeed: {
              title:'wind speed',
              value:`${windSpeed}km/h`,
              icon:'wind.png'
            },
            visibility: {
              title:'visibility',
              value:`${visibility}%`,
              icon:'visibility.png'
            }, 
            uvIndex:{
              title:'uv Index',
              value:`${uvIndex}/100`,
              icon:'uv-index.png'
            },
            pressure: {
              title:'pressure',
              value:`${pressure}%`,
              icon:'gauge.png'
            },
          }
      };
      renderComponent();
    } catch (error) {
      console.log(error);
    }
    
};

const getImage = (description) => {
  switch (description) {
    case 'Overcast':
      return'partly.png';
    case 'Sunny':
      return'sunny.png';
    case 'Cloud':
      return'cloud.png';
    case 'Clear':
      return'clear.png';
    case 'Fog':
      return'fog.png';
    default:
      return `the.png`;
  }

}
  const renderProperty = (properties) => {

    return Object.values(properties).map(({title, value, icon}) => {

      // то же что и в параметре цикла map ->const {title, value, icon} = data;


      return `<div class="property">
              <div class="property-icon">
                <img src="./img/icons/${icon}" alt="">
              </div>
              <div class="property-info">
                <div class="property-info__value">${value}</div>
                <div class="property-info__description">${title}</div>
              </div>
            </div>`
    })
    .join("");// return Object возвращает массив строк и эти методом что то делаем и промерти становятся в две колонки

   
  }
const markup = () => {
    const { city, description, observationTime, temperature, isDay, properties } =
    store;
    let containerClass ='';
    if (isDay === 'yes'){
      containerClass = 'is-day';
    }

    return `<div class="container ${containerClass}">
            <div class="top">
              <div class="city">
                <div class="city-subtitle">Weather Today in</div>
                  <div class="city-title" id="city">
                  <span>${city}</span>
                </div>
              </div>
              <div class="city-info">
                <div class="top-left">
                <img class="icon" src="./img/${getImage(description)}" alt="" />
                <div class="description">${description}</div>
              </div>
            
              <div class="top-right">
                <div class="city-info__subtitle">as of ${observationTime}</div>
                <div class="city-info__title">${temperature}°</div>
              </div>
            </div>
          </div>
        <div id="properties">${renderProperty(properties)}</div>
      </div>`;
}
const handleClick = () => {
  popup.classList.toggle('active');
}
const renderComponent = () => {
    root.innerHTML = markup();
    const city = document.getElementById('city');
    const closePopup = document.getElementById('close');
    city.addEventListener('click', handleClick);
    closePopup.addEventListener('click', handleClick);
};
const handleInput = (e) => {
  store = {
    ...store,
    city: e.target.value,
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  const value = store.city;
  if(!value){
    return null;
  }
  localStorage.setItem('query', value);
  fetchData();
  handleClick();
}

form.addEventListener('submit',handleSubmit )
textInput.addEventListener('input',handleInput);

fetchData();

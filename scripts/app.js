const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const  icon  = document.querySelector('.icon img');
const forecast = new Forecast();

console.log(icon);

const updateUI = (data) =>{

    //const cityDetails = data.cityDetails;
    //const weatherDetails = data.weatherDetails;

    const { cityDetails, weatherDetails } = data;
    //update detaisl template
    details.innerHTML =`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weatherDetails.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weatherDetails.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    
    `
    console.log(weatherDetails.WeatherIcon);
    const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //update bg photo of time
    let timeSrc = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // if(weatherDetails.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    time.setAttribute("src", timeSrc);

    //remove d-non if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


}



cityForm.addEventListener('submit', e =>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    console.log(city);

    //update ui with new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch( err => console.log(err));
}
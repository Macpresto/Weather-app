class Forecast{
    constructor(){
        this.key = 'ycZ29gopzGK1MoHIVfknrGiy9jv0xKvD';
        this.weatherAPI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.locationKey = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async updateCity(city){
    
        const cityDetails = await this.getCity(city);
        //console.log(cityDetails);
        const weatherDetails = await this.getWeather(cityDetails.Key);
        return {cityDetails, weatherDetails};
    }
    async getWeather(id){
        //console.log(id);
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherAPI+query);
        const data = await response.json();
        return data[0]
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.locationKey+query);
        const data = await response.json();
        return data[0];
    }
    
}



// getCity()
// .then(data => {
//     return getWeather(data.Key)
// }).then(data =>{
//     console.log(data);
// })
// .catch(err => console.log(err));


//const locationKey = fetch('http://dataservice.accuweather.com/locations/v1/cities/search', key, );
//http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
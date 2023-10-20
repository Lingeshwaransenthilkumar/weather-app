//! apikey and api url
const apiKey="445aa8d24582275cf52fd85ed17579ab";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    //*fetching data from the url
    const response=await fetch(apiUrl + city+ `&appid=${apiKey}`);
    //*retrieving the object from the response variable


    if(searchBox.value==""){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";

    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="../images/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="../images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="../images/rain.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="../images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="../images/mist.png";
    }
    else if (data.weather[0].main=="Snow"){
        weatherIcon.src="../images/snow.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

  }
}

    

//! gets the input from the input box
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

});

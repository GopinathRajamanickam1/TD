var req = new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all' , true);
req.send();
req.onload = function () {
    let result = JSON.parse(req.response);
    //Iterated using the Forin, For of , For loop
   /*for(let i in result){
        console.log(result[i].name+"--->"+result[i].capital);
    }
    for(let i=0; i<result.length ;i++){
        console.log(result[i].name+"--->"+result[i].capital);
    } 
    for(let value of result){
        console.log(value);
    }
    result.forEach(element => {
        console.log(element.capital);
    }); */

    for(let i in result){
    try{
        let country  = result[i].name;
        let lat  = result[i].latlng;
        if(lat.length === 0){
                    throw new Error("Invlaid contry");
        }
        weather(country,...lat);
    }catch(e){
        console.log("invalide conttry"+ country +e.message);
    }
  }
}

function weather(name,lat,lang){
      
      //console.log(`${lat} ${lang}`);
      var url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=9545826072fc41af76fd0ee9b75f3dfe`;
      let request = new XMLHttpRequest();
      request.open('GET',url, true);
      request.send();
      request.onload = function () {
        let finalResult =  JSON.parse(request.response);
        console.log(`${name}:${finalResult.main.temp}`);
        
    }
}
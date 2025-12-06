/ Create a new router                                                                                                                              
const express = require("express")                                                                                                                  
const router = express.Router()                                                                                                                     
const request = require('request');                                                                                                                 
                                                                                                                                                    
// Handle our routes                                                                                                                                
router.get('/',function(req, res, next){                                                                                                            
    res.render('index.ejs')                                                                                                                         
});                                                                                                                                                 
                                                                                                                                                    
router.get('/about',function(req, res, next){                                                                                                       
    res.render('about.ejs')                                                                                                                         
});                                                                                                                                                 
                                                                                                                                                    
router.get('/weather', function(req,res,next) {                                                                                                     
                                                                                                                                                    
        let apiKey = '4e760e713c2b23d10dc3bf5a29fb9318'                                                                                             
        let city = 'london'                                                                                                                         
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`                                           
                                                                                                                                                    
        request(url, function (err, response, body){                                                                                                
         if(err){                                                                                                                                   
          next(err)                                                                                                                                 
         } else {                                                                                                                                   
           var weather = JSON.parse(body);                                                                                                          
                                                                                                                                                    
           if (weather && weather.main) {                                                                                                           
            var message = `It is ${weather.main.temp} degrees in ${weather.name}.                                                                   
            Humidity: ${weather.main.humidity}%.                                                                                                    
            Condition: ${weather.weather[0].description}`;                                                                                          

           res.render('weather', { weatherMessage: message });                                                                                      
          } else {                                                                                                                                  
           res.render('weather', { weatherMessage: 'No data found for that city.' });                                                               
          }                                                                                                                                         
       }                                                                                                                                            
    });                                                                                                                                             
                                                                                                                                                    
});                                                                                                                                                 
// Export the router object so index.js can access it                                                                                               
module.exports = router                          
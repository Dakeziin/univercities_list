var getJSON = require('get-json');

getJSON ('http://universities.hipolabs.com/search?Midlle=', function (error, response){
  
  console.log(response);
  [{
    country: 'argentina',
   },  
   {
    country: 'brasil',
   },
   {
    country: 'chile',
   },
   {
    country: 'colombia',
   },
   {
    country: 'paraguai',
   },
   {
    country: 'peru',
   },
   {
    country: 'suriname',
   },
   {
    country: 'uruguay',
   }
 ]
});

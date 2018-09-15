$(document).ready(function() {
   $('.btn-light').click(function() {
     $.ajax({
       url: 'http://api.openweathermap.org/data/2.5/weather?zip=98225,us&APPID=f25b9be3ce183ae95d1da5570aed3c0e',
       datatype: 'jsonp',
       success: function(data) {
         $('.weather').html('<p class="data">The weather is currently ' + data.weather[0].description + ' in ' + data.name + '.</p>' );
       }
     })

})

$('.btn-light').hover(function() {
  $('.btn-light').toggleClass('btn-light-hover');
})

});

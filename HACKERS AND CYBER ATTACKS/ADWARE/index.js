var intervalId = null;
var ad_counter = 0;
var num_ads = 0;

var ads = [
    {"title":"SINGLeS",
    "descrip":"Everyone wants to talk to you ;)"},
    {"title":"FREE ANTIVIRUS",
    "descrip":"Remove pesky virses"}, 
    {"title":"Protein Protein!", 
    "descrip":"50% off!1!"},
    {"title":"CodeAcademy Premium", 
    "descrip":"Free ONE Month"},
    {"title":"SO Clean", 
    "descrip":"An Even Better Disk Cleaner"}
    ];

var ad_div_start = '<div class="ad">';
var ad_div_end = '</div>';
var div_size = 100;

function create_new_ad(){
    if(ad_counter <= num_ads){
      ad_counter++;
      var random_ad = ads[Math.floor(Math.random() * ads.length)];
      var random_title = "<h3>" + random_ad["title"] + "</h3>";
      var random_descrip = "<p>" + random_ad["descrip"] + "</p>";

      var pos_x = (Math.random() * ($(document).width() - div_size)).toFixed();
      var pos_y = (Math.random() * ($(document).height() - div_size - 100)).toFixed();

      $new_ad = $(ad_div_start + random_title + random_descrip + ad_div_end).css({
            'left':pos_x+'px',
            'top':pos_y+'px', 
            'position': 'fixed'
        });
      $new_ad.find("p").on('click', function(e) {
        num_ads = Math.floor(Math.random() * 7 + 5);
        intervalId = setInterval(create_new_ad, 100);
      });
      $("body").append($new_ad);
      
    } else {
      clearInterval(intervalId);
      num_ads = 0;
      intervalId = null;
      ad_counter = 0;
    }

}

$(document).ready(function() {
  
  $('#download').on('click', function(e) {
      num_ads = Math.floor(Math.random() * 5 + 5);
      intervalId = setInterval(create_new_ad, 200);
  });

  $('.ad').on('click', function(e) {
      num_ads = Math.floor(Math.random() * 5 + 5);
      intervalId = setInterval(create_new_ad, 200);
  });
});
(function() {
  window.onload = function() {

    // Creating a map
    var options = {  
      zoom: 3,  
      center: new google.maps.LatLng(37.09, -95.71),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };  

    var map = new google.maps.Map(document.getElementById('map'), options);  
    
    // Creating the icon using a sprite
    var image = new google.maps.MarkerImage(
      'img/markers.png', 
      new google.maps.Size(32, 37),  // The Size
      new google.maps.Point(65, 0),  // The origin
      new google.maps.Point(16, 35)  // The anchor
    );

    // Creating the shadow
    var shadow = new google.maps.MarkerImage(
      'img/shadow.png',
      null, 
      null,
      new google.maps.Point(16, 35)
    );

    // Creating the marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951), 
      map: map,
      icon: image,
      shadow: shadow
    });

  }
})();
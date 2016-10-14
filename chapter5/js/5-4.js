(function() {
  window.onload = function() {

    // Creating an object literal containing the properties 
    // you want to pass to the map  
    var options = {  
      zoom:3,  
      center: new google.maps.LatLng(37.09, -95.71),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };

    // Creating the map  
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Creating an array which will contain the coordinates 
    // for New York, San Francisco and Seattle
    var places = [];

    // Adding a LatLng object for each city
    places.push(new google.maps.LatLng(40.756, -73.986));
    places.push(new google.maps.LatLng(37.775, -122.419));
    places.push(new google.maps.LatLng(47.620, -122.347));

    
    // Creating a variable that will hold the InfoWindow object
    var infowindow;
    
    // Looping through the places array
    for (var i = 0; i < places.length; i++) {
      
      // Adding the markers
      var marker = new google.maps.Marker({
        position: places[i],
        map: map,
        title: 'Place number ' + i
      });
            
      // Wrapping the event listener inside an anonymous function 
      // that we immediately invoke and passes the variable i to.
      (function(i, marker) {

        // Creating the event listener. It now has access to the values of
        // i and marker as they were during its creation
        google.maps.event.addListener(marker, 'click', function() {
          
          if (!infowindow) {
            infowindow = new google.maps.InfoWindow();
          }
          
          // Setting the content of the InfoWindow
          infowindow.setContent('Place number ' + i);

          // Tying the InfoWindow to the marker 
          infowindow.open(map, marker);
          
        });

      })(i, marker);

    }
   
  };
})();

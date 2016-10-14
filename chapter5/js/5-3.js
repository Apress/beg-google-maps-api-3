(function() {
  window.onload = function() {

    // Creating an object literal containing the properties 
    // we want to pass to the map  
    var options = {
      zoom: 3,
      center: new google.maps.LatLng(37.09, -95.71),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Creating the map  
    var map = new google.maps.Map(document.getElementById('map'), options); 

    // Creating an array that will contain the coordinates 
    // for New York, San Francisco, and Seattle
    var places = [];

    // Adding a LatLng object for each city
    places.push(new google.maps.LatLng(40.756, -73.986));
    places.push(new google.maps.LatLng(37.775, -122.419));
    places.push(new google.maps.LatLng(47.620, -122.347));
  
    // Looping through the places array
    for (var i = 0; i < places.length; i++) {
      
      // Adding the marker as usual
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

          var infowindow = new google.maps.InfoWindow({
            content: 'Place number ' + i
          });

          infowindow.open(map, marker);

        });

      })(i, marker);
      
    }

  }
})();
(function() {
  
  // Loading the Google Maps API
  google.load('maps', 3, {
    'other_params': 'sensor=false&language=en'
  });

  window.onload = function() {

    // Getting the position
    if (google.loader.ClientLocation.latitude && google.loader.ClientLocation.longitude) {
    	
      // Defining the position
      var latLng = new google.maps.LatLng(google.loader.ClientLocation.latitude, 
                           google.loader.ClientLocation.longitude);
      
      // Creating the content for the InfoWindow
      var location = 'You are located in '
      location += google.loader.ClientLocation.address.city + ', '; 
      location += google.loader.ClientLocation.address.country;
      
    } else {
    	
      // Providing default values as a fallback
      var latLng = new google.maps.LatLng(0, 0);
      var location = 'Your location is unknown';
      
    }
  
    // Creating a map
    var options = {
      zoom: 2,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    
    map = new google.maps.Map(document.getElementById('map'), options);
    
    // Adding a marker to the map
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    
    // Creating a InfoWindow
    var infoWindow = new google.maps.InfoWindow({
      content: location
    });
    
    // Adding the InfoWindow to the map
    infoWindow.open(map, marker);
    
  }
  
})();

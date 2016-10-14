(function() {
  var map, geocoder, infoWindow;
	
  window.onload = function() {

    // Creating a new map
	var options = {
	  zoom: 3,
	  center: new google.maps.LatLng(37.09, -95.71),
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}; 
	map = new google.maps.Map(document.getElementById('map'), options);
		
	// Attaching a click event to the map
	google.maps.event.addListener(map, 'click', function(e) {

      // Getting the address for the position being clicked
      getAddress(e.latLng);

	});
		
  }
	
  function getAddress(latLng) {

    // Check to see if a geocoder object already exists
    if (!geocoder) {
      geocoder = new google.maps.Geocoder();
    }

    // Creating a GeocoderRequest object
    var geocoderRequest = {
      latLng: latLng
    }

    geocoder.geocode(geocoderRequest, function(results, status) {
  
      // If the infoWindow hasn't yet been created we create it
      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow();
      }
  
      // Setting the position for the InfoWindow
      infoWindow.setPosition(latLng);
  
      // Creating content for the InfoWindow
      var content = '<h3>Position: ' + latLng.toUrlValue() + '</h3>';
  
      // Check to see if the request went allright
      if (status == google.maps.GeocoderStatus.OK) {
	
        // Looping through the result
        for (var i = 0; i < results.length; i++) {
          if (results[0].formatted_address) {
            content += i + '. ' + results[i].formatted_address + '<br />';    			
          }
        }
	
      } else {
        content += '<p>No address could be found. Status = ' + status + '</p>';
      }

      // Adding the content to the InfoWindow
      infoWindow.setContent(content);
  
      // Opening the InfoWindow
      infoWindow.open(map);

    });	
		
  }
	
})();
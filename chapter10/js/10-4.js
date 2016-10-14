(function() {

  var map;
  
  window.onload = function() {
	
    // Creating a map
    var options = {
      zoom: 1,
      center: new google.maps.LatLng(31.35, 3.51),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    
    map = new google.maps.Map(document.getElementById('map'), options);
   
	// Checking if geo positioning is available
	if (geo_position_js.init()) {
		
	  // Creating a settings object
	  var settings = {
	    enableHighAccuracy: true
	  };
	
	  // Trying to determine the location of the user
	  geo_position_js.getCurrentPosition(setPosition, handleError, settings);
	       
	} else {
		
	  alert('Geo functionality is not available');
	  
	}
    
  };

  function handleError(error) {
    alert('Error = ' + error.message);  
  }
  
  function setPosition(position) {

    // Creating a LatLng from the position info
    var latLng = new google.maps.LatLng(position.coords.latitude,      
                     position.coords.longitude);

    // Adding a marker to the map
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  
    // Creating an InfoWindow
    var infoWindow = new google.maps.InfoWindow({
      content: 'You are here!'
    });

    // Adding the InfoWindow to the map
    infoWindow.open(map, marker);

    // Zooming in on the map
    map.setZoom(6);
    
  }
  
})();
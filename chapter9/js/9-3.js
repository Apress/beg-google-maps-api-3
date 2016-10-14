(function() {

  window.onload = function() {
    
    // Creating a map
    var options = {
      zoom: 5,
      center: new google.maps.LatLng(37.99, -93.77),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Creating a new MarkerManager object
    var mgr = new MarkerManager(map);
    
    // Creating an array that will contain all of the markers
    var markers = [];

  	// Setting the boundaries within where the markers will be created
  	var southWest = new google.maps.LatLng(24, -126);
  	var northEast = new google.maps.LatLng(50, -60);
  	var lngSpan = northEast.lng() - southWest.lng();
  	var latSpan = northEast.lat() - southWest.lat();
    
    // Creating markers at random locations
    for (var i = 0; i < 100; i++) {
      
      // Calculating a random location
      var lat = southWest.lat() + latSpan * Math.random();
      var lng = southWest.lng() + lngSpan * Math.random();
    	var latlng = new google.maps.LatLng(lat, lng);
      
      // Creating a marker
      var marker = new google.maps.Marker({
        position: latlng
      });
      
      // Adding the marker to the array
      markers.push(marker);
    }
    
    // Making sure the MarkerManager is properly loaded before we use it
    google.maps.event.addListener(mgr, 'loaded', function() {
      
      // Adding the markers to the MarkerManager
      mgr.addMarkers(markers, 1);
      
      // Adding the markers to the map
      mgr.refresh();
      
    });
      
  };
       	
})();
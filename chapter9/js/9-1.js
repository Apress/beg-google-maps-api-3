(function() {

  window.onload = function(){
    
    // Creating a map
    var options = {
      zoom: 3,
      center: new google.maps.LatLng(37.09, -95.71),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    
      // Getting the boundaries of the map
      var bounds = map.getBounds();
      
      // Getting the corners of the map
      var southWest = bounds.getSouthWest();
      var northEast = bounds.getNorthEast();
      
      // Calculating the distance from the top to the bottom of the map
      var latSpan = northEast.lat() - southWest.lat();
      
      // Calculating the distance from side to side
      var lngSpan = northEast.lng() - southWest.lng();
        
      // Creating a loop
      for (var i = 0; i < 100; i++) {
        
        // Creating a random position
        var lat = southWest.lat() + latSpan * Math.random();
        var lng = southWest.lng() + lngSpan * Math.random();
        var latlng = new google.maps.LatLng(lat, lng);
        
        // Adding a marker to the map
        new google.maps.Marker({
          position: latlng, 
          map: map
        });
       
      }
          
    });
    
  };
       	
})();
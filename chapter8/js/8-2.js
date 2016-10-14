(function() {
  window.onload = function(){
    
    // Creating a map
    var options = {
      zoom: 5,
      center: new google.maps.LatLng(36.1834, -117.4960),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Creating an empty MVCArray
    var route = new google.maps.MVCArray();
        
    // Creating the Polyline object
    var polyline = new google.maps.Polyline({
      path: route,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
      strokeWeight: 5
    });
    
    // Adding the polyline to the map
    polyline.setMap(map);
    
    // Adding a click event to the map object
    google.maps.event.addListener(map, 'click', function(e) {
      
      // Getting a reference to the MVCArray
      var path = polyline.getPath();
      
      // Adding the position clicked which is in fact
      // a google.maps.LatLng object to the MVCArray
      path.push(e.latLng);
      
    });
    
  };
})();

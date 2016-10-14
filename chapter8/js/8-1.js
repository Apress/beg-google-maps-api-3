(function() {
  window.onload = function() {
    
    // Creating a map
    var options = {
      zoom: 5,
      center: new google.maps.LatLng(36.1834, -117.4960),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Creating an array that will contain the points for the polyline
    var route = [
      new google.maps.LatLng(37.7671, -122.4206),
      new google.maps.LatLng(34.0485, -118.2568)
    ];
    
    // Creating the polyline object
    var polyline = new google.maps.Polyline({
      path: route,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
      strokeWeight: 5
    });
    
    // Adding the polyline to the map
    polyline.setMap(map);
  
  };
})();

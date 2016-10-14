(function() {
  window.onload = function() {

   // Creating a map
    var options = {
      zoom: 5,
      center: new google.maps.LatLng(36.6, -118.1),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Creating an array with the points for the polygon
    var points = [
      new google.maps.LatLng(37.7671, -122.4206),
      new google.maps.LatLng(36.1131, -115.1763),
      new google.maps.LatLng(34.0485, -118.2568),
    ];
        
    // Creating the polygon
    var polygon = new google.maps.Polygon({
      paths: points,
      map: map,
      strokeColor: '#0000ff',
      strokeOpacity: 0.6,
      strokeWeight: 1,
      fillColor: '#0000ff',
      fillOpacity: 0.35
    });
    
  };

})();
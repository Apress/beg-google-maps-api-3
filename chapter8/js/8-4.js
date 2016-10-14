(function() {

  window.onload = function() {

   // Creating a map
    var options = {
      zoom: 6,
      center: new google.maps.LatLng(36.5, -79.8),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Creating an array with the points for the outer polygon
    var polyOuter = [
      new google.maps.LatLng(37.303, -81.256),
      new google.maps.LatLng(37.303, -78.333),
      new google.maps.LatLng(35.392, -78.333),
      new google.maps.LatLng(35.392, -81.256)
    ];
    
    // Creating an array with the points for the inner polygon
    var polyInner = [
      new google.maps.LatLng(36.705, -80.459),
      new google.maps.LatLng(36.705, -79),
      new google.maps.LatLng(35.9, -79),
      new google.maps.LatLng(35.9, -80.459)
    ];
    
    var points = [polyOuter, polyInner];
        
    // Creating the polygon
    var polygon = new google.maps.Polygon({
      paths: points,
      map: map,
      strokeColor: '#ff0000',
      strokeOpacity: 0.6,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    
  };
       	
})();
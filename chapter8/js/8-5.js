(function() {

  window.onload = function() {
    
    // Creating a map
    var options = {
      zoom: 4,
      center: new google.maps.LatLng(25.5, -71.0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Creating an array with the points for the Bermuda Triangle
    var bermudaTrianglePoints = [
      new google.maps.LatLng(25.7516, -80.1670),
      new google.maps.LatLng(32.2553, -64.8493),
      new google.maps.LatLng(18.4049, -66.0578)
    ];
    
    // Creating the polygon
    var bermudaTriangle = new google.maps.Polygon({
      paths: bermudaTrianglePoints,
      map: map,
      strokeColor: '#ff0000',
      strokeOpacity: 0.6,
      strokeWeight: 1,
      fillColor: '#ff0000',
      fillOpacity: 0.35
    });
    
    // Adding mouseover event to the polygon
    google.maps.event.addListener(bermudaTriangle, 'mouseover', function(e) {
      
      // Setting the color of the polygon to blue
      bermudaTriangle.setOptions({
        fillColor: '#0000ff',
        strokeColor: '#0000ff'
      });
      
    });
        
    // Adding a mouseout event for the polygon
    google.maps.event.addListener(bermudaTriangle, 'mouseout', function(e) {
      
      // Setting the color of the polygon to red
      bermudaTriangle.setOptions({
        fillColor: '#ff0000',
        strokeColor: '#ff0000'
      });
      
    });

  };
       
})();
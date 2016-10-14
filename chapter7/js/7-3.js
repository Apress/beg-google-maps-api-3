 (function() {

  // Defining variables that need to be available to some functions
  var map, infoWindow;
  
  window.onload = function() {
  
    // Creating a map
    var options = {  
      zoom: 3,
      center: new google.maps.LatLng(37.09, -95.71),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };  
    
    map = new google.maps.Map(document.getElementById('map'), options);
    
    // Adding a marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951),
      map: map,
      title: 'Click me'
    });
    
    
    google.maps.event.addListener(marker, 'click', function() {
    
      // Creating the div that will contain the detail map
      var detailDiv = document.createElement('div');
      detailDiv.style.width = '200px';
      detailDiv.style.height = '200px';
      document.getElementById('map').appendChild(detailDiv);
      
      // Creating MapOptions for the overview map
      var overviewOpts = {
        zoom: 14,
        center: marker.getPosition(),
        mapTypeId: map.getMapTypeId(),
        disableDefaultUI: true
      };
      
      var detailMap = new google.maps.Map(detailDiv, overviewOpts);
      
      // Create a marker that will show in the detail map
      var detailMarker = new google.maps.Marker({
        position: marker.getPosition(),
        map: detailMap,
        clickable: false
      });
      
      // Check to see if an InfoWindow already exists
      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow();
      }
      
      // Setting the content of the InfoWindow to the detail map
      infoWindow.setContent(detailDiv);
      
      // Opening the InfoWindow
      infoWindow.open(map, marker);
    
    });
  
  };
})();
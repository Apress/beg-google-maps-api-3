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

    // Adding a marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951),
      map: map,
      title: 'Click me'
    });

    google.maps.event.addListener(marker, 'click', function() {
    
      // Check to see if an InfoWindow already exists
      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow();
      }
      
      // Creating the content  
      var content = '<div id="info">' +
        '<img src="img/squirrel.jpg" alt="" />' + 
        '<h2>Maps are awesome</h2>' +
        '<p>Some sample text</p>' +
        '<p><a href="http://www.svennerberg.com">A sample link</a></p>' +
        '</div>';
      
      // Setting the content of the InfoWindow
      infoWindow.setContent(content);
      
      // Opening the InfoWindow
      infoWindow.open(map, marker);
    
    });
    
    // Triggering the click event
    google.maps.event.trigger(marker, 'click');
    
  };
  
})();
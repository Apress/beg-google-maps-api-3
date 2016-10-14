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
    
    // Adding a click-event to the marker
    google.maps.event.addListener(marker, 'click', function() {
    
    // Check to see if an InfoWindow already exists
    if (!infoWindow) {
      infoWindow = new google.maps.InfoWindow();
    }
    
    // Creating a video element and setting its attributes
    var video = document.createElement('video');
    video.setAttribute('src',
        'http://upload.wikimedia.org/wikipedia/commons/3/3f/ACA_Allertor_125_video.ogv');
    video.setAttribute('width', '300');
    video.setAttribute('height', '200');
    video.setAttribute('controls', 'controls');
    video.setAttribute('autoplay', 'autoplay');
        
    // Passing the video variable as the content for the InfoWindow    
    infoWindow.setContent(video);
    
    // Opening the InfoWindow
    infoWindow.open(map, marker);
    
    });
    
    // Opening the InfoWindow when the map loads
    google.maps.event.trigger(marker, 'click');
    
  };
})();
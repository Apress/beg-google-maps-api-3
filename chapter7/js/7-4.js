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
      
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Adding a marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951),
      map: map,
      title: 'Click me'
    });

    // Add event handler for the markers click event
    google.maps.event.addListener(marker, 'click', function() {
      
      
      // First we create the container for the content of the InfoWindow
      var content = document.createElement('div');
      
      // We then create a paragraph element that will contain some text
      var p = document.createElement('p');
      p.innerHTML = 'This marker is positioned on Manhattan.';
      
      // We then create a second paragraph element that will contain the clickable link
      var p2 = document.createElement('p');
      
      // Creating the clickable link
      var a = document.createElement('a');
      a.innerHTML = 'Zoom in';
      a.href = '#';
      
      // Adding a click event to the link that performs
      // the zoom in, and cancels its default action
      a.onclick = function() {
        
        // Setting the center of the map to the same as the clicked marker
        map.setCenter(marker.getPosition());
        
        // Setting the zoom level to 15
        map.setZoom(15);
        
        // Canceling the default action
        return false;
      };

      // Appending the link to the second paragraph element
      p2.appendChild(a);
      
      // Appending the two paragraphs to the content container
      content.appendChild(p);
      content.appendChild(p2);

      // Check to see if infoWindow already exists, if not we create a new
      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow();
      }
      // We set the content of the InfoWindow to our content container
      infoWindow.setContent(content);
      
      // Lastly we open the InfoWindow
      infoWindow.open(map, marker);
      
    });

  };
})();
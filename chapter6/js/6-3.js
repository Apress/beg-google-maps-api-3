(function() {
  window.onload = function() {
    // Creating a LatLng object containing the coordinate for the center of the map  
    var latlng = new google.maps.LatLng(37.09, -95.71);  

    // Creating an object literal containing the properties you want to pass to the map  
    var options = {  
      zoom: 3,  
      center: latlng,  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };  

    // Calling the constructor, thereby initializing the map  
    var map = new google.maps.Map(document.getElementById('map'), options);  
    
    // Defining different MarkerImages for different states
    var wifi = new google.maps.MarkerImage(
      'img/markers.png', 
      new google.maps.Size(32, 37),
      new google.maps.Point(0, 0), 
      new google.maps.Point(16, 35)
    );

    var wifiHover = new google.maps.MarkerImage(
      'img/markers.png', 
      new google.maps.Size(32, 37),
      new google.maps.Point(33, 0), 
      new google.maps.Point(16, 35)
    );

    var wifiClick = new google.maps.MarkerImage(
      'img/markers.png', 
      new google.maps.Size(32, 37),
      new google.maps.Point(66, 0), 
      new google.maps.Point(16, 35)
    );

    // Defining the shadow image for the marker
    var shadow = new google.maps.MarkerImage(
      'img/shadow.png',
      new google.maps.Size(51, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(16, 35)
    );
    
    // Adding a marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951), 
      map: map,
      icon: wifi,
      shadow: shadow
    });
    
    // Adding events that will alter the look of the marker
    
   
    // Hover
    google.maps.event.addListener(marker, 'mouseover', function() {
      this.setIcon(wifiHover);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
      this.setIcon(wifi);
    });
 
    // Click
    google.maps.event.addListener(marker, 'mousedown', function() {
      this.setIcon(wifiClick);
    });
    
    google.maps.event.addListener(marker, 'mouseup', function() {
      this.setIcon(wifiHover);
    });

  }
})();

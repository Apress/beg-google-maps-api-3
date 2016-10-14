(function() {

  window.onload = function(){

    // Creating a map
    var options = {
      zoom: 3,
      center: new google.maps.LatLng(37.99, -93.77),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Initializing MarkerManager  
    var mgr = new MarkerManager(map);
    
    // Creating a marker that represents Colorado
    var colorado = new google.maps.Marker({
      position: new google.maps.LatLng(39.4568, -105.8532),
      icon: 'img/cluster.png'
    });
    
    // Adding a click event to the Colorado marker
    google.maps.event.addListener(colorado, 'click', function() {
      
      // Setting the zoom level of the map to 7
      map.setZoom(7);
      
      // Setting the center of the map to the clicked markers position
      map.setCenter(colorado.getPosition());
      
    });
    
    // Creating a marker that represents Utah
    var utah = new google.maps.Marker({
      position: new google.maps.LatLng(40.0059, -111.9176),
      icon: 'img/cluster.png'
    });
    
    // Adding a click event to the Utah marker
    google.maps.event.addListener(utah, 'click', function() {
      map.setZoom(7);
      map.setCenter(utah.getPosition());
    });
        
    // Creating an array that will contain the markers forColorado and Utah
    var states = [colorado, utah];
   
    // Creating an array that will contain markers that is positioned 
    // at cities in Colorado and Utah
    var cities = [
      // Colorado Springs
      new google.maps.Marker({position: new google.maps.LatLng(38.8338, -104.8213)}), 
      // Denver
      new google.maps.Marker({position: new google.maps.LatLng(39.7391, -104.9847)}),
      // Glenwood Springs
      new google.maps.Marker({position: new google.maps.LatLng(39.5505, -107.3247)}), 
      // Salt Lake City
      new google.maps.Marker({position: new google.maps.LatLng(40.7607, -111.8910)}), 
      // Fillmore
      new google.maps.Marker({position: new google.maps.LatLng(38.9688, -112.3235)}), 
      // Spanish Fork
      new google.maps.Marker({position: new google.maps.LatLng(40.1149, -111.6549)})
    ];
    
    // Making sure the MarkerManager is properly loaded before we use it
    google.maps.event.addListener(mgr, 'loaded', function() {
      
      // These markers will only be visible between zoom level 1 and 5
      mgr.addMarkers(states, 1, 5);
      
      // These markers will be visible at zoom level 6 and deeper
      mgr.addMarkers(cities, 6);
      
      // Making the MarkerManager add the markers to the map
      mgr.refresh();
      
    });

  };
       	
})();
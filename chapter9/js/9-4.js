(function() {

  window.onload = function() {

    // Creating a map
    var options = {
      zoom: 3,
      center: new google.maps.LatLng(37.99, -93.77),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Initializing the MarkerManager  
    var mgr = new MarkerManager(map);

    // Creating an array that will contain one marker for Colorado 
    // and one for Utah
    var states = [
      new google.maps.Marker({
        position: new google.maps.LatLng(39.4698, -111.5962),
        icon: 'img/cluster.png'
      }),
      new google.maps.Marker({
        position: new google.maps.LatLng(38.9933, -105.6196),
        icon: 'img/cluster.png'
      })
    ];
   
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
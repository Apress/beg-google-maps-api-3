(function() {
  window.onload = function() {

    // Creating an object literal containing the properties 
    // we want to pass to the map  
    var options = {
      zoom: 12,
      center: new google.maps.LatLng(40.7257, -74.0047),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Creating the map  
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Adding a marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.7257, -74.0047),
      map: map,
      title: 'Click me',
      icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png'
    });

  };
})();

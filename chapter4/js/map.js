(function() {
  window.onload = function() {

    // Creating a MapOptions object with the required properties
    var options = {
      zoom: 3,
      center: new google.maps.LatLng(37.09, -95.71),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    // Creating the map  
    var map = new google.maps.Map(document.getElementById('map'), options);
    
    // Attaching click events to the buttons
    
    // Getting values
    document.getElementById('getValues').onclick = function() {
      alert('Current Zoom level is ' + map.getZoom());
      alert('Current center is ' + map.getCenter());
      alert('The current mapType is ' + map.getMapTypeId());
    }

    // Changing values
    document.getElementById('changeValues').onclick = function() {
      map.setOptions({
        center: new google.maps.LatLng(40.6891, -74.0445),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      });
    }

  };
})();
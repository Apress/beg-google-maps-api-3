(function() {
  window.onload = function() {

    // Creating a map
    var options = {  
      zoom: 3,  
      center: new google.maps.LatLng(37.09, -95.71),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };  

    var map = new google.maps.Map(document.getElementById('map'), options);  
    
    // Creating the recycle icon
    var recycle = new google.maps.MarkerImage('img/recycle.png');
    
    // Creating the shadow
    var shadow = new google.maps.MarkerImage(
      'img/shadow.png',
      null, 
      null,
      new google.maps.Point(16, 35)
    );
    
    // Creating a shape    
    var shape = {
      type: 'poly',
      coord: [4,4, 29,4, 29,29, 22,29, 17,35, 16,35, 10,29, 4,29, 4,4]
    }

    // Creating the marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.756054, -73.986951), 
      map: map,
      icon: recycle,
      shadow: shadow,
      shape: shape
    });

  }
})();

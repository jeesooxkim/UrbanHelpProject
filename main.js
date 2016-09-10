  var map;
  var myLatlng = {lat: 39.9522, lng: -75.1932}; 
  var markers = [];
  var markerData;  
  
  function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatlng,
      zoom: 8
    });

    // This event listener will call addMarker() when the map is clicked.    
    map.addListener('click', function(event) {    
        createMarker(event.latLng);   
      });    
        
/*        marker.addListener('click', function() {
      setMapOnAll(null);
      markers = [];
    })    
*/
  }    

// Adds a marker to the map and push to the array. 
  function createMarker(location) {
      deleteMarkers();
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });

      markers.push(marker); //marker is created
      markerData=location;

/*          document.getElementById("output").innerHTML=location;   */
  }   

//when called, shows coordinate point
  function viewData() {
    clear();
    document.getElementById("data").innerHTML= markerData;
  }

// Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
    
// Deletes all markers in the array by removing references to them, in this case: only one needs to be removed
  function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
    markerData = null;
  }

  function clear() {
    document.getElementById("output").innerHTML="";
  }


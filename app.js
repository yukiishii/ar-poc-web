AFRAME.registerComponent('message', {
  update: function() {
    var successFunc = (position) => {
      console.log('update');

      var message = 'lat: ' + position.coords.latitude + ',lon: ' + position.coords.longitude;

      console.log(message);

      var { latitude, longitude } = position.coords;

      this.el.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      this.el.setAttribute('value', 'marker');
    }
    var errorFunc = (error) => { console.error(error) }
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 30000,
    });
  }
})

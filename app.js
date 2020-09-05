AFRAME.registerComponent('message', {
  update: function() {
    var successFunc = (position) => {
      console.log('update');

      var message = 'lat: ' + position.coords.latitude + ',lon: ' + position.coords.longitude;

      console.log(message);

      this.el.setAttribute('value', message);
    }
    var errorFunc = (error) => { console.error(error) }
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
    // navigator.geolocation.watchPosition(successFunc, errorFunc);
  }
})

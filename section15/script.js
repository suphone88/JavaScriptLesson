'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    console.log(latitude, longitude);
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 13);
    //const map = L.map('map').setView([51.505, -0.09], 13);
    console.log(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //L.marker([51.5, -0.09])

    map.on('click', function (mapEvent) {
      //console.log(mapEvent);
      form.classList.remove('hidden');

      // const { lat, lng } = mapEvent.latlng;

      // L.marker([lat, lng])
      //   .addTo(map)
      //   .bindPopup(
      //     L.popup({
      //       maxWidth: 250,
      //       minWidth: 100,
      //       autoClose: false,
      //       closeOnClick: false,
      //       className: 'running-popup',
      //     })
      //   )
      //   .setPopupContent('Workout')
      //   .openPopup();
    });
  },
  function () {
    alert('Could not get your position');
  }
);

// 233. Displaying a Map Using Leaflet Library
// 234. Displaying a Map Marker
//235. Rendering Workout Input Form

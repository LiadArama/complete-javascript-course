'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*https://countries-api-836d.onrender.com/countries/*/

const renderCountry = function (data, className = '') {
  const htmlTemplate = `   
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
       `;

  countriesContainer.insertAdjacentHTML('beforeend', htmlTemplate);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  //AJAX CALL
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const [neighbor] = data.borders;
    console.log(neighbor);
    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
    );
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// const request = new XMLHttpRequest(); // Old school way.
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/israel`
// );
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
// });

// getCountryData('usa');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryDataPromise = function (country) {
  const requestPromise = fetch(
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  requestPromise
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(responseData => {
      renderCountry(responseData[0]);
      const neighbor = responseData[0].borders?.[0];
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
      );
    })
    .then(response => response.json())
    .then(responseData => renderCountry(responseData, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong! ${err.message}`);
    });
};

btn.addEventListener('click', function () {
  getCountryDataPromise('portugal');
});

///////////////////////////////////////

// Coding Challange #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   const locationRequestPromise = fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   );
//   locationRequestPromise
//     .then(requestResult => {
//       if (!requestResult.ok)
//         throw new Error(
//           `Fetching with the following coordinates:\nLatitude: ${lat}\nLongitude${lng} has failed!`
//         );
//       return requestResult.json();
//     })
//     .then(requestData => {
//       console.log(`You are in ${requestData.city}, ${requestData.countryName}`);
//       getCountryDataPromise(requestData.countryName.toLowerCase());
//     })
//     .catch(error => console.error(`An error has occured!\n${error}`));
//   return locationRequestPromise;
// };

// // console.log(whereAmI(52.508, 13.381));
// // whereAmI(52.508, 13.381);

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
// });

const lotteryPromise = new Promise(function (resolve, reject) {});

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

// btn.addEventListener('click', function () {
//   getCountryDataPromise('portugal');
// });

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
const getPoisition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPoisition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(requestResult => {
      if (!requestResult.ok)
        throw new Error(
          `Fetching with the following coordinates:\nLatitude: ${lat}\nLongitude${lng} has failed!`
        );
      return requestResult.json();
    })
    .then(requestData => {
      console.log(`You are in ${requestData.city}, ${requestData.countryName}`);
      getCountryDataPromise(requestData.countryName.toLowerCase());
    })
    .catch(error => console.error(`An error has occured!\n${error}`));
  return locationRequestPromise;
};

// // console.log(whereAmI(52.508, 13.381));
// // whereAmI(52.508, 13.381);

// btn.addEventListener('click', whereAmI);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) resolve('You WIN!');
//   else reject(new Error('You LOSE!'));
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000); // The resolve function is the callback function that we want to be called after a certain time. --> after amount of seconds, initiate the resolve function.
//   });
// };

// wait(2)
//   .then(() => {
//     // Nothing is passed to the then method becausae there is no returned value.
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('You win!').then(x => console.log(x));
// Promise.reject(new Error('You lose')).catch(x => console.error(x));

///////////////////////////////////////

// Coding Challange #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const pause = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const ImgsDiv = document.querySelector('.images');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', imgPath);
    newImg.setAttribute('class', 'parallel');

    newImg.addEventListener('load', () => {
      ImgsDiv.appendChild(newImg);
      resolve(newImg);
    });

    newImg.addEventListener('error', () =>
      reject(new Error('Error has occured loading the image!'))
    );
  });
};

let currentImg;

createImage('../starter/img/img-1.jpg')
  .then(newImg => {
    currentImg = newImg;
    return pause(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('../starter/img/img-2.jpg');
  })
  .then(newImg => {
    currentImg = newImg;
    return pause(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('../starter/img/img-3.jpg');
  })
  .then(newImg => {
    currentImg = newImg;
    return pause(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(error => console.error(error));

/*
We need to promisify the pause function in order to force the code to wait for the promise to be handled right after two seconds.
if we try to sue setTimeout without wrapping in inside a Promise, they all will be executed together, after two seconds, after all promises were fulfilled.
Rememeber, Promises has priority over callback function!
All promises go to the microtasks, which there we first execute all promises and only then we execute the macrotasks (callback functions) queue.

If we were to use setTimeout without wrapping it inside a Promise, all setTimeouts will got to the macrotasks (callback) queue, and all promises will go to the microtasks queue.
By wrapping the setTimeout inside the Promise in "pause" function, we basically passing this setTimout into the microtasks queue, to handle the resolve after two seconds, and only then
to proceed to the next microtasks (promise).
*/

createImage('../starter/img/img-1.jpg')
  .then(newImg => {
    setTimeout(() => {
      console.log('Waiting 1');
    }, 2 * 1000);
    newImg.style.display = 'none';
    return createImage('../starter/img/img-2.jpg');
  })
  .then(newImg => {
    setTimeout(() => {
      console.log('Waiting 2');
    }, 2 * 1000);
    newImg.style.display = 'none';
    return createImage('../starter/img/img-3.jpg');
  })
  .then(newImg => {
    setTimeout(() => {
      console.log('Waiting 3');
    }, 2 * 1000);
    newImg.style.display = 'none';
  })
  .catch(error => console.error(error));
///////////////////////////////////////

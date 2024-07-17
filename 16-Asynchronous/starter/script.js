'use strict';
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

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

const getCountryDataPromise = function (country) {
  const requestPromise = fetch(
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  ); // This creates a Promise object.
  requestPromise
    .then(response => response.json()) // this returns another "Response" promise object which contains all the data for the request itself, like 200 OK, Headers and so on... Based on the response code, which is inside the "Response" Promise object, we can determine if its fullfiled or not.
    .then(responseData => console.log(responseData)); // then we can export the data out of the fullfiled Response promise object.
};

getCountryDataPromise('portugal');

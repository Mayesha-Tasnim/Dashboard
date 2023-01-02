const burgerMenu = document.querySelector(".burger-menu a");
const cross = document.querySelector(".cross a");
burgerMenu.addEventListener("click", function () {
  const sideNav = document.querySelector(".side-nav");
  const overlay = document.querySelector(".overlay");
  sideNav.classList.add("active");
  overlay.classList.add("overlayActive");
});
cross.addEventListener("click", function () {
  const sideNav = document.querySelector(".side-nav");
  const overlay = document.querySelector(".overlay");
  sideNav.classList.remove("active");
  overlay.classList.remove("overlayActive");
});

/**slide left side nav**/
const slideLeftBtn = document.querySelector(".slide-left");
const sideNav = document.querySelector(".side-nav");
const mainSec = document.querySelector(".main");
slideLeftBtn.addEventListener("click", function () {
  sideNav.classList.toggle("slide-side-nav");
  slideLeftBtn.classList.toggle("slide-right");
  mainSec.classList.toggle("main-slide-left");
});

/**map start**/

const url = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

// topojson=lines or arcs lines combines =a country;
// geojson=fixed shape of country;
fetch(url)
  .then((result) => result.json())
  .then((datapoint) => {
    countries = ChartGeo.topojson.feature(
      datapoint,
      datapoint.objects.countries
    ).features;
    const ctx7 = document.getElementById("map");
    new Chart(ctx7, {
      type: "choropleth",
      data: {
        labels: countries.map((country) => country.properties.name),
        datasets: [
          {
            label: "Countries",
            data: countries.map((country) => ({
              feature: country,
              value: Math.random(),
            })),
          },
        ],
      },
      options: {},
    });
  });

/**map end**/

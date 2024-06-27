let elCountryList = document.querySelector(".countries-list");

function renderCountries(arr, list) {
  arr.forEach((value) => {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elCapital = document.createElement("p");
    let elPopulation = document.createElement("p");
    let elIdTag = document.createElement("span");

    elItem.className = "w-[350px] p-2  bg-yellow-100 rounded-[10px]";

    elImg.src = value.flag;
    elImg.className = "w-[100%] h-[250px] rounded-[10px]";

    elName.textContent = "Country: " + value.name;
    elCapital.textContent = "Capital: " + value.capital;
    elPopulation.textContent = "Population: " + value.population;
    elIdTag.textContent = value.id;
    elItem.append(elImg, elName, elCapital, elPopulation, elIdTag);
    list.append(elItem);
  });
}
renderCountries(countries, elCountryList);

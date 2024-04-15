// const countries = [
//     { name: "United States", flag: "🇺🇸" },
//     { name: "United Kingdom", flag: "🇬🇧" },
//     { name: "Canada", flag: "🇨🇦" },
//     // Add more countries as needed
//   ];
  
//   const countryInput = document.getElementById("countryInput");
//   const countryList = document.getElementById("countryList");
  
//   function renderCountries(filter = "") {
//     const filteredCountries = countries.filter(country =>
//       country.name.toLowerCase().includes(filter.toLowerCase())
//     );
  
//     countryList.innerHTML = "";
  
//     filteredCountries.forEach(country => {
//       const countryItem = document.createElement("div");
//       countryItem.classList.add("country-item");
//       countryItem.innerHTML = `<img src="flags/${country.name}.png" alt="${country.name} flag"> ${country.name} ${country.flag}`;
//       countryItem.addEventListener("click", () => {
//         countryInput.value = country.name;
//         countryList.innerHTML = "";
//       });
//       countryList.appendChild(countryItem);
//     });
//   }
  
//   countryInput.addEventListener("input", () => {
//     renderCountries(countryInput.value);
//   });
  
//   document.addEventListener("click", (event) => {
//     if (!countryList.contains(event.target) && event.target !== countryInput) {
//       countryList.innerHTML = "";
//     }
//   });
  
//   // Initial render
//   renderCountries();
//   console.log("sss");
const countrySelect = document.querySelector("#country-select")
const options = document.querySelectorAll("#country-select, option");
const countryInput = document.querySelector('#country-input')
console.log(countryInput.value);
console.log(countrySelect);

for(let i = 0; i < options.length; i++){
    options[i].addEventListener('click',()=>{
        countryInput.value = options[i].value;
        console.log(options[i].value);
    })

}
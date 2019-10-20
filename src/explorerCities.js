const cityData = require("all-the-cities")
let cityObject = {}
// console.log(cityData)
const cityInChina = cityData.filter((e)=>e.country==="CN")
// console.log(cityInChina)
const sortedAdminCode = cityInChina.sort(function(a, b) {
    return a.adminCode - b.adminCode;
});
// console.log(sortedAdminCode)
for (ii = 0; ii < sortedAdminCode.length; ii++){
    const city = sortedAdminCode[ii]
    const adminCode = city.adminCode
    // const name = city.name

    if (!cityObject[adminCode]){
        cityObject[adminCode] = [city]
    }

    cityObject[adminCode].push(city)
}
// console.log(cityObject)
// console.log(cityObject["32"])
const sortedCity32 = cityObject["32"].sort(function(a,b){
    return a.population - b.population
})
console.log(sortedCity32)
const cityData = require("all-the-cities")
// console.log(typeof cityData)
// console.log(cities)
const bigCitiesObject = {}

let citiesInChina = cityData.filter((city) => city.country === "CN")
// console.log(citiesInChina)

// let citiesInChinaMini = cityData.filter((city) => city.country === "CN" && city.population < 1000000)
// console.log(citiesInChinaMini)

// let testArray = []
// // let testArray2 = 2
// testArray.push('test')
// // testArray2.push('test')
// console.log(testArray)

const bigCities = cityData.filter((city) => city.population > 10000000)
// console.log(bigCities)


// for (ii = 0; ii < bigCities.length; ii++){
//     const item = bigCities[ii]
//     const name = item.name
//     const country = item.country

//     if (!bigCitiesObject[country]){
//         bigCitiesObject[country] = []
//     }

//     bigCitiesObject[country].push(name)
// }

// console.log(bigCitiesObject)

for (ii = 0; ii < cityData.length; ii++){
    const item = cityData[ii]
    const name = item.name
    const country = item.country

    if (!bigCitiesObject[country]){
        bigCitiesObject[country] = []
    }

    bigCitiesObject[country].push(name)
}

console.log(bigCitiesObject)
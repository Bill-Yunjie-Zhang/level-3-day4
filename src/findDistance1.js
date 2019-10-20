const cityData = require("all-the-cities")
// console.log(cityData)

const distance = function (lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

const checkCitiesIn = function(city, distance1, unit){
    // console.log(city, distance1, unit)
    // console.log(cityData)
    const city2 = cityData.find(e => e.name === city)
    if(typeof city2 === "undefined"){
        return "Please type in a real city"
    }
    if(!(unit === "K" || unit === "M" || unit === "N")){
        return "Please type in a 'K' for 'km', 'M' for 'Miles', and 'N' for 'Nautical Miles'"
    }
    // console.log(city2)
    const nearToCity = cityData.filter(e => distance(e.lat, e.lon, city2.lat, city2.lon, unit) <  distance1)
    // console.log(nearToCity)
    const ordered = nearToCity.sort((a, b) => distance(a.lat, a.lon, city2.lat, city2.lon, unit) - distance(b.lat, b.lon, city2.lat, city2.lon, unit))
    return ordered.length
    // console.log(ordered)
    // let cityobject = {}
    // for(ii = 0; ii < ordered.length; ii ++){
    //     let city1 = ordered[ii]
    //     let name = city1.name
    //     let distanceBetween = distance(city1.lat, city1.lon, city2.lat, city2.lon, "K")
    //     if(!cityobject[name]){
    //         cityobject[name] = distanceBetween
    //     }
    // }
    // return cityobject
}

console.log(checkCitiesIn("Chengdu", 1000, "K"))
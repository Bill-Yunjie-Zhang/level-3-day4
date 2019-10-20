const cityData = require("all-the-cities")
// console.log(cityData)

const chengdu = cityData.find(function(e){
    return e.name === "Chengdu"
})
// console.log(chengdu)

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
// console.log(distance)

let nearToChengdu = cityData.filter((e) => distance(e.lat, e.lon, chengdu.lat, chengdu.lon, "K") <  1000)
// console.log(nearToChengdu)

let ordered = nearToChengdu.sort(function(a,b){
    return distance(a.lat, a.lon, chengdu.lat, chengdu.lon, "K") - distance(b.lat, b.lon, chengdu.lat, chengdu.lon, "K")
})
// console.log(ordered)

let cityobject = {}
for(ii = 0; ii < ordered.length; ii ++){
    let city = ordered[ii]
    let name = city.name
    let distanceBetween = distance(city.lat, city.lon, chengdu.lat, chengdu.lon, "K")
    if(!cityobject[name]){
        cityobject[name] = distanceBetween
    }
}
// console.log(cityobject)


var map = L.map('map', {
	center: [47.3, 2.5],
	zoom: 6,
	zoomControl: false
});
           
L.tileLayer('http://{s}.tile.cloudmade.com/5503255b7f324cac91d0d21aef520d51/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

/* Custum marker */
var greenIcon = L.icon({
    iconUrl: 'images/marker-lapaillasse.png',
    //shadowUrl: 'images/marker-lapaillasse-shadow.png',

    iconSize:     [25, 25], // size of the icon
    //shadowSize:   [118, 45], // size of the shadow
    iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
    //shadowAnchor: [13, 63],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var axelsPin = L.icon({
    iconUrl: 'images/pin.png',
    //shadowUrl: 'images/marker-lapaillasse-shadow.png',

    iconSize:     [25, 25], // size of the icon
    //shadowSize:   [118, 45], // size of the shadow
    iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
    //shadowAnchor: [13, 63],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([47.3, 2.5], {icon: greenIcon}).addTo(map);
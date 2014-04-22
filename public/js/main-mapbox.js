var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([47.3, 2.5], 3);
map.zoomControl.setPosition('bottomright');

map.featureLayer.setGeoJSON([
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.352178,48.868660]
        },
        properties: {
            resultType: 'place',
            resultClass: 'Lieux',
            nbrProjects: '32',
            nbrMembers: '112',
            surface: '740',
            categories: 'bio-hackerspace - fablab - incubateur',
            thumbmail: '/web/images/lp.png',
            country: 'Paris',
            title: 'La Paillasse',
            description: '226 rue St Denis',
            icon:{
              iconUrl: 'images/pin.png',
              iconSize:     [25, 25], // size of the icon
              iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
              className : "dot"
            },
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.303273, 48.856985]
        },
        properties: {
            resultType: 'place',
            resultClass: 'Projet',
            nbrProjects: '32',
            nbrMembers: '112',
            surface: '740',
            categories: 'projets - plateforme - collaboratif',
            thumbmail: '/web/images/mayall.png',
            country: 'Paris',
            title: 'MAYALL',
            description: '32 rue de l\'exposition',
            icon:{
              iconUrl: 'images/pin.png',
              iconSize:     [25, 25], // size of the icon
              iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
              className : "dot"
            },
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.369197, 48.858656]
        },
        properties: {
            resultType: 'place',
            resultClass: 'Groupe',
            nbrProjects: '32',
            nbrMembers: '112',
            surface: '740',
            categories: 'upcycling - évènements - collaboratif',
            thumbmail: '/web/images/lounge.png',
            country: 'Paris',
            title: 'LoungeShare',
            description: '48 rue St Sabin',
            icon:{
              iconUrl: 'images/pin.png',
              iconSize:     [25, 25], // size of the icon
              iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
              className : "dot"
            },
        }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [2.366879, 48.869843]
        },
        properties: {
            resultType: "place",
            resultClass: 'Competence',
            nbrProjects: "32",
            nbrMembers: "112",
            surface: "740",
            categories: "developpeur - penseur - maker",
            thumbmail: "/web/images/pierre.png",
            country: "Paris",
            title: "Pierre Mary",
            description: "48 bis Quai de Jemmapes",
            icon:{
              iconUrl: 'images/pin.png',
              iconSize:     [25, 25], // size of the icon
              iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
              className : "dot"
            },
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.425842, 48.859165]
        },
        properties: {
            resultType: 'place',
            resultClass: 'Lieux',
            nbrProjects: '32',
            nbrMembers: '112',
            surface: '740',
            categories: 'fablab - artisans - maker',
            thumbmail: '/web/images/ici.png',
            country: 'Montreuil',
            title: 'ICI Montreuil',
            description: '135 Boulevard Chanzy',
            icon:{
              iconUrl: 'images/pin.png',
              iconSize:     [25, 25], // size of the icon
              iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
              popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
              className : "dot"
            },
        }
    }
]);

var info = document.getElementById('search-results');

// Iterate through each feature layer item, build a
// marker menu item and enable a click event that pans to + opens
// a marker that's associated to the marker item.
map.featureLayer.on('layeradd', function(marker) {

    marker.setIcon(map.icon(feature.properties.icon));

});

map.featureLayer.eachLayer(function(marker) {
  var link = info.appendChild(document.createElement('div'));
  link.className = 'list-group-item '+marker.feature.properties.resultClass;
  //link.href = '#';
  marker.feature.properties.icon;
  if(marker.feature.properties.resultType == 'place'){
    // Populate content from each markers object.
    link.innerHTML = '<img class="search-result-thumbmail" src="'+
    marker.feature.properties.thumbmail+'" alt=""><div class="infos"><div class="localisation">'+
    marker.feature.properties.country+' <span class="flag flag-france"></span></div><h4 class="list-group-item-heading">'+
    marker.feature.properties.title+'</h4><p class="list-group-item-text">'+
    marker.feature.properties.categories+'</p><ul class="key-numbers"><li><span class="glyphicon glyphicon-folder-close"></span> '+
    marker.feature.properties.nbrProjects+'</li><li><span class="glyphicon glyphicon-comment"></span> '+
    marker.feature.properties.nbrMembers+'</li><li><span class="glyphicon glyphicon-certificate"></span> '+
    marker.feature.properties.surface+' m²</li></ul><a href="#" class="map-marker"><span class="glyphicon glyphicon-map-marker"></a></div></div>';
  }
  link.onclick = function() {
    if (/active/.test(this.className)) {
      this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
    } else {
      var siblings = info.getElementsByTagName('a');
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].className = siblings[i].className
          .replace(/active/, '').replace(/\s\s*$/, '');
      };
      this.className += ' active';

      // When a menu item is clicked, animate the map to center
      // its associated marker and open its popup.
      map.panTo(marker.getLatLng());
      marker.openPopup();
    }
    return false;
  };
});


// Add locate button
L.control.locate().addTo(map).setPosition('bottomright');
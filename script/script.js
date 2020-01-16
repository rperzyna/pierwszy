

require (["esri/Map", "esri/views/MapView"],
        function(Map, MapView)
        {
            let map1 = new Map({basemap:"satellite"});
            let mapview = new MapView({
                container: "mapview",
                map: map1,
				zoom: 4,
				center: [15, 65]
            });
});

alert("działa");
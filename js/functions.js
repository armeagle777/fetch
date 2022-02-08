function myMap({allIds,latlangs}) {
    var scripts = document.querySelectorAll("script[src*='maps.googleapis.com/']");
    for(var i = 0; i < scripts.length; i++) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
    allIds.forEach((id, index)=>{

        let location = latlangs ? new google.maps.LatLng(latlangs[index][0],latlangs[index][1]) :  new google.maps.LatLng(40.18111, 44.51361);
        const mapProp = {
            center: location,
            zoom: 6,
            disableDefaultUI: true,
            mapId: '9d77cb208122a347',
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            rotateControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };



        this["map"+index] = new google.maps.Map(
            document.getElementById(id),
            mapProp

        );
    })

};
////map
///*window.onload = function () {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(show);
//    } else {
//        x.innerHTML = "Niestety nie możemy wyświetlić mapy";
//    }
//}
//*/
//window.onload=
//function show() {

//    //var clat = position.coords.latitude;
//    //var clong = position.coords.longitude;
//    //clatlong = new google.maps.LatLng(clat, clong);

//    latlong = new google.maps.LatLng(54.444946, 18.555061)
//    mapa = document.getElementById("mapa")
//    mapa.style.height = "400px";
//    mapa.style.width = "400x";

//    var opcje = {
//        center: latlong, zoom: 15,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        mapTypeControl: false,
//        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
//    }
//    var map = new google.maps.Map(document.getElementById("mapa"), opcje);
//    var marker = new google.maps.Marker({
//        position: latlong, animation: google.maps.Animation.BOUNCE,
//        map: map, title: "Bike'owy rower dla Ciebie!"
//    });
//    /* marker klienta */
//    // var cmarker = new google.maps.Marker({ position: clatlong, map: map });
//    //var infowindow = new google.maps.InfoWindow({
//    //content: "Tutaj jesteś!"
//    //});
//    //infowindow.open(map, cmarker);

//}
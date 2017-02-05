$(document).ready(function() {
    var map;

    function initialize() {
        var mapOptions = {
            zoom: 4,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            minZoom: 3,
            center: new google.maps.LatLng(41.8780, -93.0977)
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        //making markers manually - if more icons were needed use a marker + object design pattern
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(48.638424, -126.4539047),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/user.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Friends"
        });

        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(41.0046684, -76.2581153),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/userImg.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Friends"
        });

        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(41.7576948, -125.4726194),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/connection_1.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Friends"
        });

        var marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(36.1699, -115.1398),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/connection_2.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Demo: Click me if the left panel is hidden"
        });

        //opening the left panel when clicking on marker demo
        google.maps.event.addListener(marker4, "click", function() {
            $(".map-section").width("66.1112%");
            $(".main-panel").show(300);
        });

        var marker5 = new google.maps.Marker({
            position: new google.maps.LatLng(32.7018408, -88.2336649),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/connection_3.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Friends"
        });

        var marker6 = new google.maps.Marker({
            position: new google.maps.LatLng(43.5666487, -96.2765555),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/povio/connection_4.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Friends"
        });

        var marker7 = new google.maps.Marker({
            position: new google.maps.LatLng(37.7749, -122.4194),
            map: map,
            icon: {
                url: "http://dijanamarkovic.com/assets/images/me.jpg",
                size: new google.maps.Size(100, 100),
                scaledSize: new google.maps.Size(70, 60),
                origin: new google.maps.Point(-20, -20)
            },
            optimized: false,
            title: "Dijana - Front-end  Developer"
        });

        //get current location function
        $(".pointer-map").on("click", function() {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;
                var markerYou = new google.maps.Marker({
                    position: new google.maps.LatLng(`${crd.latitude}`, `${crd.longitude}`),
                    map: map,
                    icon: {
                        url: "http://dijanamarkovic.com/assets/images/povio/you.png",
                        size: new google.maps.Size(100, 100),
                        scaledSize: new google.maps.Size(70, 60),
                        origin: new google.maps.Point(-20, -20)
                    },
                    animation: google.maps.Animation.DROP,
                    optimized: false,
                    title: "You"
                });
                var newPos = markerYou.getPosition(); // returns LatLng object
                map.setCenter(newPos); // setCenter takes a LatLng object

            };

            function error(err) {
                alert(`ERROR(${err.code}): ${err.message}`);
            };

            navigator.geolocation.getCurrentPosition(success, error, options);
        });


        // Overlay view allows you to organize your markers in the DOM
        // https://developers.google.com/maps/documentation/javascript/reference#OverlayView
        var myoverlay = new google.maps.OverlayView();
        myoverlay.draw = function() {
            //setting a id for the overlay in order to make selecting markers with css easier
            this.getPanes().markerLayer.id = "markerLayer";
        };
        myoverlay.setMap(map);
    }

    initialize();

    //event listener for closing the left panel
    $(".btn-close").on("click", function() {
        $(".main-panel").hide(300);
        $(".map-section").width("100%");
        initialize();
    });
});
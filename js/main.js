(function (window, document, $, google) {
// GoogleMaps integration
// create a LatLng object containing the coordinate for the center of the map
    var latlng = new google.maps.LatLng(50.6122185, 12.1356637);

    // prepare the map properties
    var options = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        mapTypeControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    };

    // initialize the map object
    var map = new google.maps.Map(document.getElementById('show-map'), options);

    // add Marker
    var marker1 = new google.maps.Marker({
        position: latlng,
        map: map
    });

    // add listener for a click on the pin
    google.maps.event.addListener(marker1, 'click', function () {
        infowindow.open(map, marker1);
    });

    // add information window
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="info"><strong>Ratskeller Inh. Lytsch Ingolf</strong><br><br>Am Anger 14<br>07973 Greiz</div>'
    });


    $('#body').scrollspy({ target: '#navigation' })

    var offset = 80;

    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });

})(window, document, jQuery, google);


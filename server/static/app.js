function getBHKValue() {
    // Finds the button inside the BHK group that has the 'active' class
    var activeBHK = document.querySelector("#bhk-group .btn-radio.active");
    if (activeBHK) {
        return parseInt(activeBHK.getAttribute("data-value"));
    }
    return -1; // Invalid Value
}

function getBathValue() {
    // Finds the button inside the Bath group that has the 'active' class
    var activeBath = document.querySelector("#bath-group .btn-radio.active");
    if (activeBath) {
        return parseInt(activeBath.getAttribute("data-value"));
    }
    return -1; // Invalid Value
}
function onClickedEstimatedPrice(){
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice")


    //var url = "http://127.0.0.1:5000/predict_home_price";
   var url = "/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log(data.estimated_price);
        
        // FIXED: Removed the <h2> tag so the text scales nicely inside your CSS box flexbox
        estPrice.innerHTML = "₹ " + data.estimated_price.toString() + " Lakh";
        estPrice.classList.add("populated");
        
        console.log(status);
    });
    
}

function onPageLoad() {
    console.log( "document loaded" );
    //var url = "http://127.0.0.1:5000/get_location_names";
    var url = "/get_location_names";
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;


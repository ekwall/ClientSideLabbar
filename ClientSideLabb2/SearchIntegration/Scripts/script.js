$(document).ready(function () {
    filter();
    $("#search").keyup(function (e) {
        filter();
    });

    $(".typeCheckbox").change(function (e) {
        resetPage();
        filter();
    });

});

function resetPage() {
    $("#target").html("");
}

function filter() {
    $typeFields = $(".typeCheckbox");
    var output = "<div>";

    $.each($typeFields, function () {
        if (this.checked) {
            
            $.getJSON($(this).val() + '.json', function (data) {
            var searchField = $("#search").val();
            var myExp = new RegExp(searchField, "i");

            $.each(data, function (key, val) {
                if ((val.name.search(myExp) !== -1)||
                    (val.descripton.search(myExp) !== -1) ||
                    (val.day.search(myExp) !== -1)) {
                            output += "<div class='col-md-3 foodContainer'>"
                            output += "<article>";
                            output += "<fieldset>";
                            output += "<legend class='" + val.color + "'>" + val.day + "</legend>";
                            output += "<h3>" + val.name + "</h3>";
                            output += "<span><img src='" + val.image + "'/></span>";
                            output += '<div class="price" id="' + val.day + '">' + val.price + '</div>';
                            output += "</fieldset>";
                            output += "</article>";
                            output += "</div>";

                }

                        

            });
           $("#target").html(output);
    }); 

             
  }
});
    
    
    
}

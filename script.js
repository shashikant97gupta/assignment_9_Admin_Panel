var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

var responseData ;

console.log("Script Loaded");
$(document).ready(() => {
    $("#overlay").css("display", "flex");

    // var myxhr = $.ajax({
    //     url:        url,
    //     type:       "GET",
    //     // dataType:   "text",
    //     data:        {
    //         foo:    "1"
    //     },
    //     beforeSend: function(xhr){
    //         var readystatehook = xhr.onreadystatechange;
    //         $("#overlay").css("display", "flex");
    //     },

    //     success:    function(response){
        //     $("#overlay").css("display", "none");
        //     responseData = response;  // keeping copy of response data
        // // console.log(response);
        // $.each(response , (ele) => {
        //     var tableRow = $("<tr>").addClass("data-row").attr("id", (response[ele].id));;
        //     // console.log(ele);
            
        //     // appending & creating table data

        //     tableRow.append($("<td>").addClass("column1").html(response[ele].id),
        //      $("<td>").addClass("column2").html(response[ele].firstName)
        //     , $("<td>").addClass("column3").html(response[ele].lastName)
        //     , $("<td>").addClass("column4").html(response[ele].email)
        //     , $("<td>").addClass("column5").html(response[ele].phone)
        //     );
        //     $("#table-data #table-body").append(tableRow);

        // });

        // var searchValue= "" ;
        // $("#search-box").on("keyup", (element) =>{

        //     // console.log(element);
        //     var enteredChar = element.originalEvent.key.toLowerCase();
        //     if( enteredChar == "a" || enteredChar == "b" || enteredChar == "c" || enteredChar == "d"  || enteredChar == "e" 
        //     || enteredChar == "f"  || enteredChar == "g"  || enteredChar == "h"  || enteredChar == "i"  || enteredChar == "j" 
        //     || enteredChar == "k"  || enteredChar == "l"  || enteredChar == "m"  || enteredChar == "n"  || enteredChar == "o" 
        //     || enteredChar == "p"  || enteredChar == "q"  || enteredChar == "r"  || enteredChar == "s"  || enteredChar == "t"
        //     || enteredChar == "u"  || enteredChar == "v"  || enteredChar == "w"  || enteredChar == "x"  || enteredChar == "y" 
        //     || enteredChar == "z"  ) {
        //     searchValue = searchValue+(enteredChar);
        //     console.log(searchValue);
        //     // 
        //     } else if( enteredChar == "backspace") {
        //         searchValue = searchValue.slice(0, (searchValue.length -1));
        //         console.log(searchValue);
        //     }
        //     var searchResult = response.filter(item => item.firstName.toLowerCase().includes(searchValue, 0));
        //     console.log(searchResult);
        //     $("#table-data #table-body").html("");
        //     $.each(searchResult , (ele) => {
        //         var tableRow = $("<tr>").addClass("data-row").attr("id", (searchResult[ele].id));;
        //         // console.log(ele);
                
        //         // appending & creating table data
        //         // var t = $(source).html();
        //         // t = t.;
        //         // $(source).html(t);
        //         var columnTwo = "";
                
        //         if(searchValue.length == 0){

        //         }
        //         else if((searchResult[ele].firstName)[0] == searchValue[0].toUpperCase()) {
        //             var  newSearchValue = searchValue[0].toUpperCase() + searchValue.slice(1, (searchValue.length));
        //             columnTwo =  $("<td>").addClass("column2").html(searchResult[ele].firstName.replace(newSearchValue, 
        //                   "<span class='highlight'>"+newSearchValue+"</span>")); 

        //         }
        //         else {
        //             columnTwo =  $("<td>").addClass("column2").html(searchResult[ele].firstName.replace(searchValue, 
        //                 "<span class='highlight'>"+searchValue+"</span>"));
        //         }
    
        //         tableRow.append($("<td>").addClass("column1").html(searchResult[ele].id),
        //          columnTwo
        //          , $("<td>").addClass("column3").html(searchResult[ele].lastName)
        //         , $("<td>").addClass("column4").html(searchResult[ele].email)
        //         , $("<td>").addClass("column5").html(searchResult[ele].phone)
        //         );
        //         $("#table-data #table-body").append(tableRow);
    
        //     });

        //     $(".data-row").click((row) => { 
        //         console.log(row.currentTarget.id);
        //        dataShow(row);
    
                
        //     });
            
        // });

        // function dataShow(row) {
        //     var currentRowId = row.currentTarget.id; 
        //     $(".data-row").removeClass("active");
        //     $("#"+currentRowId).addClass("active");
        //     $.each(response, (ele) => {
        //         if(response[ele].id == currentRowId ){
        //             var currentElement =  response[ele];
        //             $("#info-content").html(" ");
        //             $("#info-content").css("display", "flex" );
                
        //         var fullName = currentElement.firstName + " " + currentElement.lastName;
        //         var usrSel = $("<b>").html("User selected: ");
        //         var userDiv = $("<div>").append( usrSel, fullName);

        //         var textArea = $("<textarea>").attr({
        //             cols: 50,
        //             rows: 5,
        //             readonly: true,
        //         }).html(currentElement.description);
        //         var descriptionTitle = $("<b>").html("Description: ");
        //         var descriptionDiv = $("<div>").append(descriptionTitle, textArea);

        //         var addressValue = currentElement.address.streetAddress;
        //         var addressTitle = $("<b>").html("Address: ");
        //         var addressDiv = $("<div>").append(addressTitle,  addressValue);

        //         var cityValue = currentElement.address.city;
        //         var cityTitle = $("<b>").html("City: ");
        //         var cityDiv = $("<div>").append(cityTitle,  cityValue);

        //         var stateValue = currentElement.address.state;
        //         var stateTitle = $("<b>").html("State: ");
        //         var stateDiv = $("<div>").append(stateTitle,  stateValue);

        //         var zipValue = currentElement.address.zip;
        //         var zipTitle = $("<b>").html("Zip: ");
        //         var zipDiv = $("<div>").append(zipTitle,  zipValue);

        //         $("#info-content").append(userDiv, descriptionDiv, addressDiv, cityDiv, stateDiv, zipDiv);

        //         }
        //     });
        // }

        // $(".data-row").click((row) => { 
        //     console.log(row.currentTarget.id);
        //     dataShow(row);           
        // });

    //     },
    //     error:      function(xhr, textStatus, error){
    //         console.log(xhr.statusText, textStatus, error);
    //     }
    //  });




















    
    $.get(url, (response) => {
        $("#overlay").css("display", "none");
        responseData = response;  // keeping copy of response data
    // console.log(response);
    $.each(response , (ele) => {
        var tableRow = $("<tr>").addClass("data-row").attr("id", (response[ele].id));;
        // console.log(ele);
        
        // appending & creating table data

        tableRow.append($("<td>").addClass("column1").html(response[ele].id),
         $("<td>").addClass("column2").html(response[ele].firstName)
        , $("<td>").addClass("column3").html(response[ele].lastName)
        , $("<td>").addClass("column4").html(response[ele].email)
        , $("<td>").addClass("column5").html(response[ele].phone)
        );
        $("#table-data #table-body").append(tableRow);

    });

    var searchValue= "" ;
    $("#search-box").on("keyup", (element) =>{

        // console.log(element);
        var enteredChar = element.originalEvent.key.toLowerCase();
        if( enteredChar == "a" || enteredChar == "b" || enteredChar == "c" || enteredChar == "d"  || enteredChar == "e" 
        || enteredChar == "f"  || enteredChar == "g"  || enteredChar == "h"  || enteredChar == "i"  || enteredChar == "j" 
        || enteredChar == "k"  || enteredChar == "l"  || enteredChar == "m"  || enteredChar == "n"  || enteredChar == "o" 
        || enteredChar == "p"  || enteredChar == "q"  || enteredChar == "r"  || enteredChar == "s"  || enteredChar == "t"
        || enteredChar == "u"  || enteredChar == "v"  || enteredChar == "w"  || enteredChar == "x"  || enteredChar == "y" 
        || enteredChar == "z"  ) {
        searchValue = searchValue+(enteredChar);
        console.log(searchValue);
        // 
        } else if( enteredChar == "backspace") {
            searchValue = searchValue.slice(0, (searchValue.length -1));
            console.log(searchValue);
        }
        var searchResult = response.filter(item => item.firstName.toLowerCase().includes(searchValue, 0));
        console.log(searchResult);
        $("#table-data #table-body").html("");
        $.each(searchResult , (ele) => {
            var tableRow = $("<tr>").addClass("data-row").attr("id", (searchResult[ele].id));;
            // console.log(ele);
            
            // appending & creating table data
            // var t = $(source).html();
            // t = t.;
            // $(source).html(t);
            var columnTwo = "";
            
            if(searchValue.length == 0){

            }
            else if((searchResult[ele].firstName)[0] == searchValue[0].toUpperCase()) {
                var  newSearchValue = searchValue[0].toUpperCase() + searchValue.slice(1, (searchValue.length));
                columnTwo =  $("<td>").addClass("column2").html(searchResult[ele].firstName.replace(newSearchValue, 
                      "<span class='highlight'>"+newSearchValue+"</span>")); 

            }
            else {
                columnTwo =  $("<td>").addClass("column2").html(searchResult[ele].firstName.replace(searchValue, 
                    "<span class='highlight'>"+searchValue+"</span>"));
            }

            tableRow.append($("<td>").addClass("column1").html(searchResult[ele].id),
             columnTwo
             , $("<td>").addClass("column3").html(searchResult[ele].lastName)
            , $("<td>").addClass("column4").html(searchResult[ele].email)
            , $("<td>").addClass("column5").html(searchResult[ele].phone)
            );
            $("#table-data #table-body").append(tableRow);

        });

        $(".data-row").click((row) => { 
            console.log(row.currentTarget.id);
           dataShow(row);

            
        });
        
    });

    function dataShow(row) {
        var currentRowId = row.currentTarget.id; 
        $(".data-row").removeClass("active");
        $("#"+currentRowId).addClass("active");
        $.each(response, (ele) => {
            if(response[ele].id == currentRowId ){
                var currentElement =  response[ele];
                $("#info-content").html(" ");
                $("#info-content").css("display", "flex" );
            
            var fullName = currentElement.firstName + " " + currentElement.lastName;
            var usrSel = $("<b>").html("User selected: ");
            var userDiv = $("<div>").append( usrSel, fullName);

            var textArea = $("<textarea>").attr({
                cols: 50,
                rows: 5,
                readonly: true,
            }).html(currentElement.description);
            var descriptionTitle = $("<b>").html("Description: ");
            var descriptionDiv = $("<div>").append(descriptionTitle, textArea);

            var addressValue = currentElement.address.streetAddress;
            var addressTitle = $("<b>").html("Address: ");
            var addressDiv = $("<div>").append(addressTitle,  addressValue);

            var cityValue = currentElement.address.city;
            var cityTitle = $("<b>").html("City: ");
            var cityDiv = $("<div>").append(cityTitle,  cityValue);

            var stateValue = currentElement.address.state;
            var stateTitle = $("<b>").html("State: ");
            var stateDiv = $("<div>").append(stateTitle,  stateValue);

            var zipValue = currentElement.address.zip;
            var zipTitle = $("<b>").html("Zip: ");
            var zipDiv = $("<div>").append(zipTitle,  zipValue);

            $("#info-content").append(userDiv, descriptionDiv, addressDiv, cityDiv, stateDiv, zipDiv);

            }
        });
    }

    $(".data-row").click((row) => { 
        console.log(row.currentTarget.id);
        dataShow(row);           
    });

    });

});

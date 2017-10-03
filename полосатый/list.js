$("body").append("<ul type='none'></ul>");
$("ul").addClass("list");
for (var i=0; i<6; i++){
    
    if (i%2){
        $(".list").append("<li class='dark'>" + i + "</li>");
    }
    else {
        $(".list").append("<li class='white'>" + i + "</li>");
    }    
}
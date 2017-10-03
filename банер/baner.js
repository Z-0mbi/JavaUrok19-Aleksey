var dispFlag = 0;
var imgShow = document.getElementsByClassName("img");

function baner(){
    if (dispFlag < imgShow.length-1){
        imgShow[dispFlag].style.display = "none";
        imgShow[dispFlag+1].style.display = "block";
        dispFlag++;
    }
    else{
        imgShow[dispFlag].style.display = "none";
        imgShow[0].style.display = "block";
        dispFlag = 0;
    }
  
	setTimeout('baner()',800);
}


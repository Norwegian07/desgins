function openNav(){
    document.getElementById("nav-contains").style.width = "100%";
    document.getElementById("nav-holder").style.display = "none";
}
function closeNav(){
    document.getElementById("nav-contains").style.width = "0%"
    document.getElementById("nav-holder").style.display = "block";
}

var initialIndex = 0;
showSlides();

function showSlides(){
    let i;
    initialIndex ++;
    let slides = document.getElementsByClassName("image-holder");
    for(i = 0; i < slides.length ; i ++){
        slides[i].style.display = "none";
    }
    if(initialIndex > slides.length){
        initialIndex = 1;
    }
    slides[initialIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000)
}
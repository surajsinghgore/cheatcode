function lightModeActivate(){
    let sun=document.getElementById("sun");
    let moon=document.getElementById("moon");
sun.style.display="none";
moon.style.display="block";
document.body.style.backgroundColor="white";

    
}





function darkModeActivate(){
    let sun=document.getElementById("sun");
    let moon=document.getElementById("moon");
    moon.style.display="none";
sun.style.display="block";

document.body.style.backgroundColor="black";



}



function showInput(){
    let searchInput=document.getElementById("searchInput");
   
    searchInput.style.display="block";
}
// hide search bar

function hideSearchBar(){
    let searchInput=document.getElementById("searchInput");
    searchInput.style.display="none";
}


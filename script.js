let options = {
    startAngle:-1.55,
    size: 50,
    value: 0.9,
    fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
});
$(".swahili .bar").circleProgress({
    value: 1.0,
});
$(".french .bar").circleProgress({
    value: 0.2,
});
$(".chinese .bar").circleProgress({
    value: 0.03,
});


////////////////////////main-sidebar ///////////////////
let mainSideBar = document.querySelector(".main-sidebar");
let btn= document.querySelector("#sidebar-btn");
let searchBtn= document.querySelector(".bx-search-alt-2");

btn.onclick = function(){
    mainSideBar.classList.toggle("active");
    sidebarBtnChange(); //This will call the function optionally
}
searchBtn.onclick = function(){
    mainSideBar.classList.toggle("active");
    sidebarBtnChange(); //This will call the function optionally
}

function menuBtnChange() {
    if(mainSideBar.classList.contains("active")){
        btn.classList.replace("bx-menu", "bx-menu-alt-left");
    }
    else{
        btn.classList.replace("bx-menu-alt-left", "bx-menu")
    }
}
/////////////////////////////////////////////////////////




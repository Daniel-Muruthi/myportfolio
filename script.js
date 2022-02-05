let options = {
    startAngle:-1.55,
    size: 50,
    value: 0.9,
    fill: {gradient: ['gold']}
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

function sidebarBtnChange() {
    if(mainSideBar.classList.contains("active")){
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    }
    else{
        btn.classList.replace("bx-menu-alt-right", "bx-menu")
    }
}
////////////////////////end of main-sidebar code /////////////////////////////////

//////////////text-rotate code ///////////////////


let textRotate = function(el, toRotate, period){
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt='';
    this.tick();
    this.isDeleting = false;
};
textRotate.prototype.tick = function(){
    let i = this.loopNum % this.toRotate.length;
    let fullText = this.toRotate[i];

    if(this.isDeleting){
        this.txt = fullText.substring(0, this.txt.length -1);
    }
    else{
        this.txt = fullText.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    var that = this;
    var delta = 300 - Math.random() * 100;

    if(this.isDeleting) {
        delta/=2;
    }
    if(!this.isDeleting && this.txt === fullText){
        delta = this.period;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function(){
        that.tick();
    }, delta);
};
window.onload = function(){
    let elements = $('.text-rotate');
    for(let i=0; i<elements.length; i++){
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate){
            new textRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    let css =document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".text-rotate > .wrap {border-right: 0.08em solid gold}";
    document.body.appendChild(css);
};



//////////end of text rotate code/////////////////////////////




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

////////////////////////sidebar checkbar hide ///////////////////


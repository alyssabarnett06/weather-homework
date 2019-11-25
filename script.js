
var current = new Date();
var date = (current.getMonth()+1) + '/' + current.getDate() + '/' + current.getFullYear();

$('#cityName').submit(function(e){
    e.preventDefault();    
    var userInput = $('#userInput').val().trim();
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput},us&units=imperial&APPID=3b5715c4cc3d80c499e1192a073d5982`;    
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
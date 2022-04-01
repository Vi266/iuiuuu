const yourDate = new Date("2021-08-18T00:30:00"),
    music = ['giữa khung trời hoa mộng đôi mình có nhau  ct', 'Ngày Đầu Tiên  ', 'Tell Ur Mom II  '];

document.addEventListener('DOMContentLoaded', function() {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";

    function olock() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
        document.getElementById("hvn").innerHTML = time;
    }
    olock();
    var timer = setInterval(function() { olock() }, 1000);
    document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );

}, false);
let eventDate = new Date("August 7, 2021 12:00:00");
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = eventDate - now;

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
});

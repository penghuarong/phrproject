var drawone = document.querySelector('.drawone');
var udone = drawone.getContext('2d');
//500 400

udone.beginPath();
udone.moveTo(50, 20);
udone.lineTo(50, 370);
udone.lineTo(500, 370);
udone.stroke();
udone.closePath();

for (var i = 0; i < 10; i++) {
    udone.beginPath();
    udone.strokeStyle = "#ccc";
    udone.moveTo(50 - 10, 20 + 39 * i);
    udone.lineTo(500 - 10, 20 + 39 * i);
    udone.stroke();
    udone.closePath();

    udone.beginPath();
    udone.fillStyle = "#000";
    udone.fillText((i + 1) * 100, 50 - 10, 370 - 38 * i);
    udone.textAlign = "center";
    udone.textBaseAlign = "middle";
    udone.stroke();
    udone.closePath();
}

for (var i = 0; i < 12; i++) {
    udone.beginPath();
    udone.strokeStyle = "#ccc";
    udone.moveTo(50 + 39.5 * i, 20);
    udone.lineTo(50 + 39.5 * i, 370 + 10);
    udone.stroke();
    udone.closePath();

    udone.beginPath();
    udone.fillStyle = "#000";
    udone.fillText((i + 1) + "月", 50 + 39.5 * i, 370 + 10 + 10);
    udone.textAlign = "center";
    udone.textBaseAlign = "middle";
    udone.stroke();
    udone.closePath();
}

var arr1 = [100, 200, 150, 500, 400, 700, 600, 1000, 800, 900, 950, 1000];
var arr2 = [200, 100, 300, 200, 500, 600, 800, 700, 600, 1000, 950, 300]
var bill = 39 / 100;
udone.beginPath();
udone.strokeStyle = "orange";
arr1.map(function(v, i) {
    if (i == 0) {
        udone.moveTo(50, 370 - (v - 100) * bill);
    } else {
        udone.lineTo(50 + 39.5 * i, 370 - (v - 100) * bill);
    }
})
udone.stroke();
udone.closePath();

udone.beginPath();
udone.strokeStyle = "green";
arr2.map(function(v, i) {
    if (i == 0) {
        udone.moveTo(50, 370 - (v - 100) * bill);
    } else {
        udone.lineTo(50 + 39.5 * i, 370 - (v - 100) * bill);
    }
})
udone.stroke();
udone.closePath();


var drawtwo = document.querySelector('.drawtwo');
var udtwo = drawtwo.getContext('2d');
var arr3 = [500, 3500, 2000, 3000, 1000, 2500, 3000, 3200, 2800];
var arr4 = [3500, 2000, 500, 1000, 2800, 3200, 3000, 3400, 3000];
var billtwo = 49.5 / 500;
udtwo.beginPath();
udtwo.moveTo(50, 20);
udtwo.lineTo(50, 370);
udtwo.lineTo(500, 370);
udtwo.stroke();
udtwo.closePath();

for (var i = 0; i < 8; i++) {
    udtwo.beginPath();
    udtwo.strokeStyle = "#ccc";
    udtwo.moveTo(50 - 10, 20 + 49.5 * i);
    udtwo.lineTo(500 - 10, 20 + 49.5 * i);
    udtwo.stroke();
    udtwo.closePath();

    udtwo.beginPath();
    udtwo.fillStyle = "#000";
    udtwo.fillText(i * 500, 50 - 20, 370 - 49 * i);
    udtwo.textAlign = "center";
    udtwo.textBaseAlign = "middle";
    udtwo.stroke();
    udtwo.closePath();
}

for (var i = 0; i < 9; i++) {
    udtwo.beginPath();
    udtwo.fillStyle = "#000";
    udtwo.fillText((i + 1) + "月", 50 + 50 * i + 25, 370 + 10 + 10);
    udtwo.textAlign = "center";
    udtwo.textBaseAlign = "middle";
    udtwo.stroke();
    udtwo.closePath();
}


arr3.map(function(v, i) {
    aquare(50 + 40 * i + 10 * i, 370, 15, -v * billtwo, "#283c7b");
})
arr4.map(function(v, i) {
    console.log(v, i);
    aquare(75 + 50 * i, 370, 15, -v * billtwo, "skyblue");
})

function aquare(x, y, w, h, color) {
    udtwo.beginPath();
    udtwo.fillStyle = color;
    udtwo.fillRect(x, y, w, h);
    udtwo.fill();
    udtwo.closePath();
}

var drawthree = document.querySelector('.drawthree');
var udthree = drawthree.getContext('2d');
var deg = Math.PI / 180;
var arr5 = [{ value: 100, color: "red" },
    { value: 30, color: "pink" },
    { value: 70, color: "orange" },
    { value: 60, color: "yellow" },
    { value: 40, color: "skyblue" },
    { value: 20, color: "limegreen" },
    { value: 40, color: "#f0f" }
];
var start = -90;
var end = 0;
arr5.map(function(v, i) {
    end = start + v.value;
    circle(start, end, v.color);
    start = end;
})

function circle(a, b, color) {
    udthree.beginPath();
    udthree.fillStyle = color;
    udthree.arc(250, 200, 150, a * deg, b * deg);
    udthree.lineTo(250, 200);
    udthree.fill();
    udthree.closePath();
}

function line(du) {
    var deg2 = start + du / 2;
    var x = Math.cos(deg2 * deg) * 150;
    var y = Math.sin(deg2 * deg) * 150;
    var x1 = Math.cos(deg2 * deg) * 170;
    var y1 = Math.sin(deg2 * deg) * 170;
    udthree.beginPath();
    udthree.moveTo(x, y);
    udthree.lineTo(x1, y1);
    if (du < 300) {
        udthree.lineTo(x1 + 100, y1);
    } else {
        udthree.lineTo(x1 - 100, y1);
    }
    udthree.stroke();
    udthree.closePath();
}
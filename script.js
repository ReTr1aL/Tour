'use strict'

function backgroundChange() {
    let header = document.getElementById('header');
    let i = 1;
    let interval = setInterval(function(){
        if(i<5) {
            i++
            header.style.backgroundImage = "url(../img/"+ i + ".jpg)";
        }
        else {
            i =1;
            header.style.backgroundImage = "url(../img/"+ i + ".jpg)";
        }
    }, 3000)
};

backgroundChange();

function toursMenuOn() {
    let tours = document.getElementById('tourslink');
    let toursmenu = document.getElementById('toursmenu');
    window.addEventListener('click', function (e) {
        if(e.target == tours) {
            toursmenu.classList.toggle('visibletour');
        }
        else {
            toursmenu.classList.add('visibletour');
        }
    })
};
toursMenuOn()

function servisesMenuOn() {
    let tours = document.getElementById('serviseslink');
    let toursmenu = document.getElementById('servisesmenu');
    window.addEventListener('click', function (e) {
        if(e.target == tours) {
            toursmenu.classList.toggle('visibleservises');
        }
        else {
            toursmenu.classList.add('visibleservises');
        }
    })
};
servisesMenuOn()
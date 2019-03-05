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

function circleActive () {
    let circle = document.querySelectorAll('.circle');
    let block = document.getElementById('activeblock');
    block.addEventListener('click', function (event) {
        if(event.target == circle[1]) {
            circle[0].classList.remove('active');
            circle[1].classList.add('active');
            circle[2].classList.remove('active');
        }
        else if(event.target == circle[2]) {
            circle[1].classList.remove('active');
            circle[2].classList.add('active');
            circle[0].classList.remove('active');
        }
        else if (event.target == circle[0]){
            circle[1].classList.remove('active');
            circle[2].classList.remove('active');
            circle[0].classList.add('active');
        }
    })
};

circleActive ()

function mainTourActive () {
    let maintour = document.querySelectorAll('.maintour');
    let blockparent = document.getElementById('mainparent');
    blockparent.addEventListener('click', function (event) {
        if(event.target == maintour[1]) {
            maintour[0].classList.remove('activemenu');
            maintour[1].classList.add('activemenu');
        }
        else if(event.target == maintour[0]) {
            maintour[1].classList.remove('activemenu');
            maintour[0].classList.add('activemenu');
        }
    })
};

mainTourActive ()
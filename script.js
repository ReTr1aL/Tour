'use strict'

function toursMenuOn() {
    let tours = document.getElementById('tourslink');
    let toursmenu = document.getElementById('toursmenu');
    window.addEventListener('click', function (e) {
        if(e.target == tours) {
            toursmenu.classList.toggle('visibletour');
        }
        else {
            toursmenu.classList.add('visibletour');
        };
    });
};
toursMenuOn();

function servisesMenuOn() {
    let tours = document.getElementById('serviseslink');
    let toursmenu = document.getElementById('servisesmenu');
    window.addEventListener('click', function (e) {
        if(e.target == tours) {
            toursmenu.classList.toggle('visibleservises');
        }
        else {
            toursmenu.classList.add('visibleservises');
        };
    });
};
servisesMenuOn();

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
        };
    });
};

circleActive ()

// function mainTourActive () {
//     let maintour = document.querySelectorAll('.maintour');
//     let blockparent = document.getElementById('mainparent');
//     blockparent.addEventListener('click', function (event) {
//         if(event.target == maintour[1]) {
//             maintour[0].classList.remove('activemenu');
//             maintour[1].classList.add('activemenu');
//         }
//         else if(event.target == maintour[0]) {
//             maintour[1].classList.remove('activemenu');
//             maintour[0].classList.add('activemenu');
//         };
//     });
// };

// mainTourActive ();

function countriesOn(){
    let point = document.getElementById('countrymenu');
    let countriesmenu = document.getElementById('countries');
    window.addEventListener('click', function (event) {
        if(event.target == point) {
            countriesmenu.classList.toggle('countrieshide');
        }
        else { 
            countriesmenu.classList.add('countrieshide');
        };
    });
};

countriesOn();

function inputValue() {
    let countryid = document.getElementById('countryid');
    let countries = document.querySelectorAll('.val');
    window.addEventListener('click', function(event) {
        if(event.target == countries[0]) {
            countryid.value = countries[0].innerHTML;
        }
        else if(event.target == countries[1]) {
            countryid.value = countries[1].innerHTML;
        }
        else if(event.target == countries[2]) {
            countryid.value = countries[2].innerHTML;
        }
        else if(event.target == countries[3]) {
            countryid.value = countries[3].innerHTML;
        };
    });
};

inputValue();

function onScroll() {
    let hidden = document.getElementById('countries');
    window.addEventListener('scroll', function() {
        hidden.classList.add('countrieshide');
    });
};

onScroll();

function removeTest3(){
    sliderone.classList.remove('hidden');
}

function removeTest2(){
    sliderdouble.classList.remove('hidden');
}

function popularOn(callback) {
    let popular = document.getElementById('popular');
    let hot = document.getElementById('hot');
    let sliderone = document.getElementById('sliderone');
    window.addEventListener('click', function (e) {
        if(e.target == popular) {
            popular.style = "color: #fbd341;";
            hot.style = "color: black;";
            sliderone.classList.add('hidden');
            callback()
        }
    });
};
popularOn(removeTest2);

function hotOn(callback) {
    let hot = document.getElementById('hot');
    let popular = document.getElementById('popular');
    let sliderdouble = document.getElementById('sliderdouble');
    window.addEventListener('click', function (e) {
        if(e.target == hot) {
            hot.style = "color: #fbd341;";
            popular.style = "color: black;";
            sliderdouble.classList.add('hidden');
            callback()
        }
    });
};
hotOn(removeTest3);

function validate() {
    let userName = document.getElementById("name");
    let userMail = document.getElementById("mail");
    let userPhone = document.getElementById("phone");
    let userCountry = document.getElementById("countryid");
    let forms = document.getElementById("forms");

    if(!userName.value && !userName.value && !userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }
    if(userName.value && !userMail.value && !userPhone.value &&  !userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }

    if(!userName.value && !userMail.value && userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }
    

    if(!userName.value && userMail.value && !userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }

    if(!userName.value && !userMail.value && !userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(userName.value && userMail.value && !userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }

    if(userName.value && !userMail.value && userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }

    if(userName.value && !userMail.value && !userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(!userName.value && userMail.value && userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }

    if(!userName.value && userMail.value && !userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(!userName.value && !userMail.value && userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(!userName.value && userMail.value && userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid red";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(userName.value && !userMail.value && userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid red";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }

    if(userName.value && userMail.value && !userPhone.value && userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid red";
        userCountry.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        return false
    }
    
    if(userName.value && userMail.value && userPhone.value && !userCountry.value) {
        userName.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userMail.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userPhone.style.borderBottom = "1px solid rgba(197, 189, 189, 0.5)";
        userCountry.style.borderBottom = "1px solid red";
        return false
    }
}
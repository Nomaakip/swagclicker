let clicks = 0;
let clicksdisplay = document.getElementById("c2");
clicksdisplay.innerHTML = "clicks: " + clicks;
let autoclicker = false;
let autoset = false;
let multipliernumber = 0;
let achievement1is = false;
let gregredeemed = false;
achievement1.style.display = 'block';
let redeemed = document.getElementById("redeemedalr");
redeemed.style.display = 'none';
let codediv = document.getElementById("newcode");
codediv.style.display = 'none';
let pikiredeemed = false;
let upgradem = 0;
let bought = document.getElementById('boughtalr');
let upgrademclick = 20;
let achievementbox = document.getElementById("achievementdiv");
achievementbox.style.display = 'none';


const test = [
     "ok bro",
    "test"
];

console.log(test[1]);

document.addEventListener("DOMContentLoaded", function () {
    const text = [
        "Tenacity",
        "Rise",
        "Novoline"
    ];

    function randomh1() {
        const choosetext = Math.floor(Math.random() * text.length);
        return text[choosetext];
      }

      tenacity.innerHTML = randomh1();
});






function clicked() {
    if (multipliernumber >= 1) {
        clicks += 1 + multipliernumber;
        clicksdisplay.innerHTML = "clicks: " + clicks;
    }
    else {
        clicks++;
        clicksdisplay.innerHTML = "clicks: " + clicks;
    }
    checks();
}



function multiply() {
    if (upgradem >= 3) {
        bought.innerHTML = "You already have the best upgrade!";
    }
    if (clicks < upgrademclick) {
        if (upgradem >= 3) {
            bought.innerHTML = "You already have the best upgrade!";
        }

        else {
            bought.innerHTML = "Not enough clicks! You ned at least " + upgrademclick + " clicks!";
        }
    }

    if (upgradem < 3) {
        if (clicks >= upgrademclick) {
            multipliernumber += 1;
            upgradem++;
            clicks -= upgrademclick;
            upgrademclick *= 2;
            console.log(multipliernumber);
            checks();
        }
    }
}

function autoclickenable() {
    if (autoclicker == true) {
        bought.innerHTML = "already bought!";
        console.log("already bought!");
    }

    if (autoclicker == false) {
        if (clicks >= 100) {
            clicks -= 100;
            autoclicker = true;
            console.log(autoclicker);
            checks();
        }
    }

}

function sanitizeInput(input) {
    const safeInputPattern = /^[a-zA-Z0-9\s-]*$/;
    return safeInputPattern.test(input) ? input.trim() : null;
}

function greg() {
    const inputElement = document.getElementById("codeinput");
    const rawInput = inputElement.value;
    const sanitizedText = sanitizeInput(rawInput);

    if (sanitizedText == null) {
        redeemed.style.display = 'block';
        redeemed.innerHTML = "Invalid characters detected! Please enter valid characters.";
        inputElement.value = "";
        return;
    }

    if (sanitizedText === "greg") {
        if (gregredeemed) {
            redeemed.style.display = 'block';
            redeemed.innerHTML = "Already redeemed! go to greg.com";
            setTimeout(() => {
                redeemed.classList.add('gone');
                setTimeout(() => redeemed.display = 'none', 500);
            }, 5000);
            redeemed.classList.remove('gone');
            checks();
        } else {
            clicks += 100;
            gregredeemed = true;
            checks();
        }
    }

    if (sanitizedText === "pikidiary") {
        if (pikiredeemed) {
            redeemed.style.display = 'block';
            redeemed.innerHTML = "Already redeemed! No more mona points for you...";
            setTimeout(() => {
                redeemed.classList.add('gone');
                setTimeout(() => redeemed.display = 'none', 500);
            }, 5000);
            redeemed.classList.remove('gone');
            checks();
        } else {
            clicks += 1000;
            redeemed.style.display = 'block';
            redeemed.innerHTML = "+1000000000 mona points";
            setTimeout(() => {
                redeemed.classList.add('gone');
                setTimeout(() => redeemed.display = 'none', 500);
            }, 5000);
            redeemed.classList.remove('gone');
            pikiredeemed = true;
            checks();
        }
    }
}

function checks() {
    if (autoclicker == true) {
        if (autoset == true) {
            console.log("hi");
            clicks += 1 + multipliernumber;
            clicksdisplay.innerHTML = "clicks: " + clicks;
        }

        if (autoset == false) {
            window.setInterval(function () {
                autoset = true;
                clicks += 1 + multipliernumber;
                clicksdisplay.innerHTML = "clicks: " + clicks;
            }, 1000);
        }
    }
    if (clicks >= 100) {
        if (achievement1is == true) {

        }

        if (achievement1is == false) {
            achievement1is = true;
            achievement1.innerHTML = "100 clicks!";
            console.log("fire greg")
            achievementbox.style.display = 'flex';
            setTimeout(() => {
                achievementbox.classList.add('gone');
                setTimeout(() => achivementbox.remove(), 500);
            }, 5000);
        }
    }
    clicksdisplay.innerHTML = "clicks: " + clicks;
    c2.addEventListener(
        "mouseenter",
        (event) => {
            // highlight the mouseenter target
            event.target.style.color = "purple";
        }
    );
}

function codedisplay() {
    codediv.style.display = 'block';
    container.style.display = 'none';
}

function clickdivclose() {
    codediv.classList.add('gone');
    codediv.style.display = 'none';
    container.style.display = 'block';
    redeemed.classList.remove('gone');
}

checks();
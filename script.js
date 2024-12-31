let clicks = 0;
let clicksdisplay = document.getElementById(2);
clicksdisplay.innerHTML = "clicks: " + clicks;
let autoclicker = false;
let autoset = false;
let multipliernumber = 0;
let achievement1is = false;
let gregredeemed = false;
achievement1.style.display = 'none';
let redeemed = document.getElementById("redeemedalr");
redeemed.style.display = 'none';
let codediv = document.getElementById("newcode");
codediv.style.display = 'none';

function clicked() {
    if (multipliernumber >= 1) {
        clicks += 1 + multipliernumber;
        let clicksdisplay = document.getElementById(2);
        clicksdisplay.innerHTML = "clicks: " + clicks;
    }
    else {
        clicks++;
        let clicksdisplay = document.getElementById(2);
        clicksdisplay.innerHTML = "clicks: " + clicks;
    }
}



function multiply() {
    if (clicks >= 20) {
        clicks -= 20;
        multipliernumber += 1;
        console.log(multipliernumber);
        checks();
    }
}

function autoclickenable() {
    if (autoclicker == true) {
        let bought = document.getElementById('boughtalr');
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
            redeemed.innerHTML = "Already redeemed!";
            setTimeout(() => {
                redeemed.classList.add('gone');
                setTimeout(() => redeemed.remove(), 500);
            }, 5000); 
            checks();
        } else {
            clicks += 100;
            gregredeemed = true;
            checks();
        }
    } 
}

function checks() {
    if (autoclicker == true) {
        if (autoset == true) {
            console.log("hi");
            clicks += 1 + multipliernumber;
                let clicksdisplay = document.getElementById(2);
                clicksdisplay.innerHTML = "clicks: " + clicks;
        }

        if (autoset == false) {
            window.setInterval(function () {
                autoset = true;
                clicks += 1 + multipliernumber;
                let clicksdisplay = document.getElementById(2);
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
            achievement1.style.display = 'flex';
            setTimeout(() => {
                achievement1.classList.add('gone');
                setTimeout(() => achievement1.remove(), 500);
            }, 5000); 
        }
    }

    clicksdisplay.innerHTML = "clicks: " + clicks;
}

function codedisplay() {
    codediv.style.display = 'block';
    container.style.display = 'none';
}

function clickdivclose() {
        codediv.classList.add('gone');
        codediv.style.display = 'none';
        container.style.display = 'block';
}
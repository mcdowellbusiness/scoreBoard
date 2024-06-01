let homePoints = document.getElementById("homePoints");
let guestPoints = document.getElementById("guestPoints");
let homeScore = 0;
let guestScore = 0;

function score(points, side) {
    if(side === 'home') {
        homeScore += points;
        homePoints.textContent = homeScore;
    }
    else if (side === 'guest') {
        guestScore += points;
        guestPoints.textContent = guestScore;
    }
}

function clearBtn(side) {
    console.log("clear function ran");
    if(side === 'home') {
        homeScore = 0;
        homePoints.textContent = homeScore;
    }
    else if (side === 'guest') {
        guestScore = 0;
        guestPoints.textContent = guestScore;
    }
}

function test() {
    console.log("test");
}

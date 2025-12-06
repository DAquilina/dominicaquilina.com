var storyTimer;
var outroTimer;

function reset() {

    clearTimeout(storyTimer);

    document.getElementById("start").style.display = "block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("canvas").className = "";
    document.getElementById("storyMusic").pause();
    document.getElementById("storyMusic").currentTime = 0;
    document.getElementById("outro-panel").style.display = "";
}

function resolveOutro() {
    document.getElementById("outro-panel").style.display = "block !important";
}

function triggerIntroAnimation() {

    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";
    document.getElementById("canvas").className = "intro-animation";
    document.getElementById("storyMusic").play();

    storyTimer = setTimeout(triggerStoryAnimation, 12000);
}

function triggerStoryAnimation() {

    document.getElementById("canvas").className = "story-animation";

    outroTimer = setTimeout(resolveOutro, 269000);
}

window.onload = function() {

    document.getElementById("start").addEventListener("click", triggerIntroAnimation);
    document.getElementById("reset").style.display = "none";
    document.getElementById("reset").addEventListener("click", reset);
};

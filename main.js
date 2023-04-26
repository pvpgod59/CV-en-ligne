//  BURGER MENU

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu')})
menuHamburger.addEventListener('click',()=>{body.classList.toggle('scroll-block')})

function activate(activer) {
    document.getElementById("scroll1").classList.remove("active")
    document.getElementById("scroll2").classList.remove("active")
    document.getElementById("scroll3").classList.remove("active")
    document.getElementById(activer).classList.add("active")

    navLinks.classList.remove("mobile-menu")
    body.classList.remove("scroll-block")
}

// Activities

let requestURL = './activities.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function heroes() {
    const activities = request.response;
    printAllActivities(activities);
}

var activitieId;

function printAllActivities(activities) {
    for (let i = 0; i < activities.length; i++) {
        var dir = document.getElementById("activities-container");
        var newActivitieClass = document.createElement("div");
        var activitieTitle = activities[i].title;
        var activitieImg = activities[i].img;
        var activitieId = activities[i].id;
        newActivitieClass.classList.add("card");
        newActivitieClass.setAttribute("onclick", `enableArticle(${activitieId})`)
        newActivitieClass.setAttribute("id", activitieId)
        newActivitieClass.innerHTML = `<h3>${activitieTitle}</h3><img src="${activitieImg}">`;
        dir.appendChild(newActivitieClass);
    }
}

const article = document.getElementById("article")

function enableArticle(id) {
    article.classList.toggle("active")
    const activities = request.response;
    var activitieText = activities[id-1].text;
    var activitieTitle = activities[id-1].title;

    console.log(document.getElementById("activites-article-h3"));
    
    document.getElementById("activites-article-h3").textContent = activitieTitle;
    document.getElementById("activites-article-p").textContent = activitieText;
}
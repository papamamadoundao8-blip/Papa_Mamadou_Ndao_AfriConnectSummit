document.getElementById('bouttonburger').addEventListener('click', function() {
    document.getElementById('MESLIENS').classList.toggle('active');
});

let NOIRBLANC = document.getElementById('NOIRBLANC');
function activer(){
document.body.classList.add('themeclair');
localStorage.setItem('theme', 'clair');
}

function desactiver(){
document.body.classList.remove('themeclair');
localStorage.setItem('theme', 'sombre');
}
if (localStorage.getItem('theme') === 'clair'){
    activer();
}else{
    desactiver();
}
NOIRBLANC.addEventListener('click', function (){
if (document.body.classList.contains('themeclair')){
    desactiver();
}else{
    activer();
}
});

document.addEventListener('scroll', function () {
    let nav = document.querySelector('.navigation');
    if (window.scrollY > 80) {
        nav.classList.add('navbarauscroll');
    } else {
        nav.classList.remove('navbarauscroll');
    }
});
let retour = document.getElementById("retourverslehaut");
document.addEventListener('scroll', function () {
let retour = document.getElementById("retourverslehaut");
    if (window.scrollY > 400) {
        retour.style.display = "block";
    } else {
        retour.style.display = "none";
    }
});
retour.addEventListener('click', function () {
    window.scrollTo({ top: 0 , behavior:'smooth'});
})

let sections = document.querySelectorAll('h3, .fade');
sections.forEach(function (s) {
    s.classList.add('fondu');
});
let messection = new IntersectionObserver(function (m) {
    m.forEach(function (sect) {
        if (sect.isIntersecting) {
            sect.target.classList.add('fondre');
        }
    });
}, { threshold: 0.25 });
sections.forEach(function (s) {
    messection.observe(s);
});

let stats = document.querySelectorAll(".nombre");
let chiffre = new IntersectionObserver(function (compter) {
    compter.forEach(function (numero) {
        if (numero.isIntersecting) {
            let s = numero.target;
            let valeurF = parseInt(s.textContent);
            let valeurI = 0;
            let compteur = setInterval(function () {
                valeurI += 1;
                s.textContent = valeurI;
                if (valeurI >= valeurF) {
                    s.textContent = valeurF + '+';
                }
            }); chiffre.unobserve(s);
        }
    });
});
stats.forEach(function (s) {
    chiffre.observe(s);
});

let année = document.getElementById("annee");
année.textContent = new Date().getFullYear();

let boutonsjours = document.querySelectorAll(".boutonCALEN button");
let jour1 = document.querySelector(".jour1");
let jour2 = document.querySelector(".jour2");
let jour3 = document.querySelector(".jour3");

boutonsjours.forEach(function (jour) {
    jour.addEventListener("click", function () {
    let texte = jour.textContent;
    if (texte === "Jour 1") {
        jour1.classList.add("actif");
        jour2.classList.remove("actif");
        jour3.classList.remove("actif");
    }
    else if (texte === "Jour 2") {
        jour2.classList.add("actif");
        jour1.classList.remove("actif");
        jour3.classList.remove("actif");
    }
    else if (texte === "Jour 3") {
        jour3.classList.add("actif");
        jour1.classList.remove("actif");
        jour2.classList.remove("actif");
}
        });
});

let cartes = document.querySelectorAll(".intervenant > .carte_intervenant");
if (cartes.length > 0) {
    cartes[0].dataset.intervenant = "business";
    cartes[1].dataset.intervenant = "data";
    cartes[2].dataset.intervenant = "iatech";
    cartes[3].dataset.intervenant = "data";
    cartes[4].dataset.intervenant = "business";
    cartes[5].dataset.intervenant = "design";
    cartes[6].dataset.intervenant = "iatech";
    cartes[7].dataset.intervenant = "design";
    cartes[8].dataset.intervenant = "data";

let boutons = document.querySelectorAll(".mesbouttons > button");
boutons.forEach(function (boutonI) {
    boutonI.addEventListener("click", function () {
    let texte = boutonI.textContent;
    cartes.forEach(function (carte) {
if (texte === "Tous") {
    carte.style.display = "block";
}
else if (texte === "IA et Tech" && carte.dataset.intervenant === "iatech") {
    carte.style.display = "block";
}
else if (texte === "Business" && carte.dataset.intervenant === "business") {
    carte.style.display = "block";
}
else if (texte === "Design" && carte.dataset.intervenant === "design") {
    carte.style.display = "block";
}
else if (texte === "Data" && carte.dataset.intervenant === "data") {
    carte.style.display = "block";
}
else {
    carte.style.display = "none";
}
            });
        });
    });
}

let dateDC = new Date("2026-10-15");
let temps = setInterval(function () {
    let aujourdhui = new Date();
    let difference = dateDC - aujourdhui;
    if (difference < 0) {
        clearInterval(temps);
        document.getElementById("jour").textContent = 0;
        document.getElementById("heure").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconde").textContent = 0;
        return;
    }
    let secondesTotal = parseInt(difference / 1000);
    let jours = parseInt(secondesTotal / 86400);
    secondesTotal = secondesTotal - (jours * 86400);
    let heures = parseInt(secondesTotal / 3600);
    secondesTotal = secondesTotal - (heures * 3600);
    let minutes = parseInt(secondesTotal / 60);
    secondesTotal = secondesTotal - (minutes * 60);
    let secondes = secondesTotal;
document.getElementById("jour").textContent = jours;
document.getElementById("heure").textContent = heures;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconde").textContent = secondes;
});

document.getElementById("envoyer").addEventListener("click", function (cliquer) {
cliquer.preventDefault();
let prenom = document.querySelector('input[placeholder="Donner votre prenom"]').value;
let nom = document.querySelector('input[placeholder="Donner votre nom"]').value;
let email = document.querySelector('input[type="email"]').value;
let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
let telephone = document.querySelector('input[placeholder="Donner votre numero"]').value;
let type = document.querySelector('#type').value;
let pays = document.querySelector('#pays').value;
let message = document.querySelector('#message').value;

if (prenom === "") {
    afficherErreur('input[placeholder="Donner votre prenom"]', "Veuillez donner votre prénom ");
    return;
}
if (nom === "") {
    afficherErreur('input[placeholder="Donner votre nom"]', "Veuillez donner votre nom ");
    return;
}
if (email === "" || !regexEmail.test(email)) {
    afficherErreur('input[type="email"]', "Veuillez donner votre email ");
    return;
}
if (telephone === "") {
    afficherErreur('input[placeholder="Donner votre numero"]', "Veuillez donner votre téléphone ");
    return;
}
if (type === "") {
    afficherErreur('#type', "Veuillez sélectionner votre statut");
    return;
}
if (pays === "") {
    afficherErreur('#pays', "Veuillez sélectionner votre pays");
    return;
}
if (message.length < 20) {
    afficherErreur('#message', "Minimum 20 caractères !");
    return;
}
else {
    afficherSucces();
    enlever();
    document.querySelector("#form").reset();
}
});

function afficherErreur(selecteur, texte) {
    let champ = document.querySelector(selecteur);
    let dejala = champ.parentNode.querySelector(".erreur");
    if (dejala) dejala.remove();
    let erreur = document.createElement("p");
    erreur.textContent = texte;
    erreur.className = "erreur";
    erreur.style.color = "red";
    erreur.style.fontSize = "13px";
    erreur.style.marginTop = "4px";
    champ.after(erreur);
}
function enlever() {
    document.querySelectorAll(".erreur")
        .forEach(function (supprimer) {
            supprimer.remove();
        });
}
function afficherSucces() {
    let succes = document.createElement("div");
    succes.textContent = " Message Envoyé";
    succes.style.background = "#06f83f";
    succes.style.color = "#0a0a0a";
    succes.style.fontSize = "20px";
    succes.style.padding = "15px";
    succes.style.borderRadius = "30px";
    succes.style.marginTop = "15px";
    succes.style.textAlign = "center";
    document.querySelector("#form").after(succes);
}

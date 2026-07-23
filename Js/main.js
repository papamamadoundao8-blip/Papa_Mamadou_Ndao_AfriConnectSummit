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

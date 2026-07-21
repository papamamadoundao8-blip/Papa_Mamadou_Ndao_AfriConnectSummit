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
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navigation');
    if (window.scrollY > 80) {
        nav.classList.add('navbarauscroll');
    } else {
        nav.classList.remove('navbarauscroll');
    }
});
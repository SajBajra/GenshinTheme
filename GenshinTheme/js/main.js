//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
});

//counter design
document.addEventListener('DOMContentLoaded', () => {
   function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
    current =start,
    range = end -start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, step);
}
counter('count1', 0, 65395767, 3000);
counter('count2', 0, 89, 2500);
counter('count3', 0, 60000000, 1000);
counter('count4', 0, 7, 1000);
});

//character change
function changeContent1() {
    const imgElement = document.getElementById('character-img');
    const descElement = document.getElementById('character-desc');
    const sectionElement = document.getElementById('characters');

    // Change the image source and paragraph content
    imgElement.src = 'assets/images/n1.png'; 
    descElement.innerHTML = 'The Peacemaker of the Tlalocan, the <br> ender of all disputes.'; 
    sectionElement.style.backgroundImage = 'url("assets/images/character-bacground.jpg")'; 
}
function changeContent2() {
    const imgElement = document.getElementById('character-img');
    const descElement = document.getElementById('character-desc');
    const sectionElement = document.getElementById('characters');

    // Change the image source and paragraph content
    imgElement.src = 'assets/images/n2.png'; 
    descElement.innerHTML = 'A young man from the Masters of the <br> Night-Wind who instead lives in the <br> wild alongside all manner of life.'; 
    sectionElement.style.backgroundImage = 'url("assets/images/character-bacground2.jpg")'; 
}
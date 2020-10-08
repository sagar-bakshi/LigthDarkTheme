let  themeToggle  = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
let toggleIcon = document.getElementById('toggle-icon');
let textBox = document.getElementById('text-box');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');


//change image
function changeImage(color) {
     image1.src=`img/undraw_conceptual_idea_${color}.svg`;
     image2.src=`img/undraw_feeling_proud_${color}.svg`;
      image3.src=`img/undraw_proud_coder_${color}.svg`;
}


//Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
   changeImage('dark');
}

//light mode style
function lightMode() {
     nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    changeImage('light');
}

//switch Theme Dynamically
function switchTheme(event){

    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

//event listener
themeToggle.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');

if(currentTheme=='dark'){
            document.documentElement.setAttribute('data-theme',currentTheme);
           themeToggle.checked=true;
            darkMode();
}else{
            document.documentElement.setAttribute('data-theme',currentTheme);
            themeToggle.checked=false;
            lightMode();
}
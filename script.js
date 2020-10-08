let  themeToggle  = document.querySelector('input[type="checkbox"]');

//switch Theme Dynamically
function switchTheme(event){

    console.log(event);

    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else {
        document.documentElement.setAttribute('data-theme','light');

    }
}


//event listener
themeToggle.addEventListener('change',switchTheme);
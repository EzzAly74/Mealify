let light = document.querySelector('.lightMode') ;

let d = document.getElementsByClassName('moon')[0] ;

d.addEventListener('click',()=>{
    if(d.classList.contains('fa-moon'))
    {
        d.classList.remove('fa-moon');
        d.classList.add('fa-gear');
        light.href = 'css/dark.css';
    }
    else if(d.classList.contains('fa-gear'))
    {
        d.classList.remove('fa-gear');
        d.classList.add('fa-moon');
        light.href = 'css/style.css';
    }
});


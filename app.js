 let toggle = document.querySelector('#hamburger');
    toggle.addEventListener('click', function(){
        document.querySelector('#nav-menu').style.display='block';
        document.querySelector('#cancel').style.display='block';
        this.style.display='none';
})

let cancel = document.querySelector('#cancel');
    cancel.addEventListener('click', function(){
        document.querySelector('#nav-menu').style.display='none';
        document.querySelector('#hamburger').style.display='block';
        this.style.display='none';
})

let disappear =document.querySelector('#nav-menu');
    disappear.addEventListener('click', function(){
        document.querySelector('#cancel').style.display='none';
        document.querySelector('#hamburger').style.display='block';
        this.style.display='none';
    })
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




    const buttons = document.querySelectorAll('.amount-btn');
    const input = document.getElementById('amount-input');

    //  buttons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             buttons.forEach(btn => btn.classList.remove('selected'));
    //             button.classList.add('selected');
                
    //             const amount = button.getAttribute('data-amount');
    //             input.value = `${amount}`;
    //         });
    //     });

     buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('selected')) {
                    button.classList.remove('selected');
                    input.value = '';
                } else {
                    buttons.forEach(btn => btn.classList.remove('selected'));
                    button.classList.add('selected');
                    const amount = button.getAttribute('data-amount');
                    input.value = amount;
                }
            });
        });
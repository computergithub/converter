let clossList=document.querySelector('#clossList');
let opanList=document.querySelector('#opanList');
let navbar=document.querySelectorAll('.navbar');

    opanList.addEventListener('click', ()=>{
        navbar.forEach (navbar_el => navbar_el.classList.add('active'))
    })
    clossList.addEventListener('click', ()=>{
        navbar.forEach (navbar_el => navbar_el.classList.remove('active'))
    })
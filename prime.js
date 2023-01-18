const blaki = document.querySelector('.black');
const but = document.querySelector('.navButton');
const button = document.querySelector('.buttons')
const tit = document.querySelector('.title')
const hi = document.querySelector('.hi')
const ho = document.querySelector('.ho')

const us = document.querySelector('#us');
const contact = document.querySelector('#contact');
const gallery = document.querySelector('#gallery');
const home = document.querySelector('#home');

    
hi.classList.add('hidden')


function buton(){
    blaki.classList.toggle('white')
    button.classList.toggle('hidden')
    tit.classList.toggle('hidden')
    hi.classList.toggle('hidden')
    ho.classList.toggle('hidden')
}

but.addEventListener('click', function(){
    buton();
});

us.addEventListener('click', function(){
    buton();
    document.querySelector('.us').scrollIntoView({behavior: 'smooth'});
});

contact.addEventListener('click', function(){
    buton();
    document.querySelector('.contact-us').scrollIntoView({behavior: 'smooth'});
});

gallery.addEventListener('click', function(){
    buton();
    document.querySelector('.gallery').scrollIntoView({behavior: 'smooth'});
});

home.addEventListener('click', function(){
    buton();
    window.scroll({
  top: 0,
  behavior: 'smooth'
});
});
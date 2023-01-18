'use strict';

const sallat = document.querySelector('.salad');
const buk = document.querySelector('.bruschette');
const sushi = document.querySelector('.sushi');
const risoto = document.querySelector('.risotti');
const pasta = document.querySelector('.pasta');
const patate = document.querySelector('.gnochi');
const special = document.querySelector('.special');

const smenu = document.querySelector('.sub-menu');
const tmenu = document.querySelector('.menu-type')
const me = document.querySelector('.me');
const but = document.querySelector('.navButton');
const ok = document.querySelector('.ok');

const ssallat = document.querySelector('.subSalad');
const sbuk = document.querySelector('.subBruschette');
const ssushi = document.querySelector('.subSushi');
const srisoto = document.querySelector('.subRisotti');
const spasta = document.querySelector('.subPasta');
const spatate = document.querySelector('.subGnochi');
const sspecial = document.querySelector('.subSpecial');


sbuk.classList.add('hidden')
ssushi.classList.add('hidden')
srisoto.classList.add('hidden')
spasta.classList.add('hidden')
spatate.classList.add('hidden')
sspecial.classList.add('hidden')
me.classList.add('hidden')


but.addEventListener('click',function(){
    tmenu.classList.remove('hidden');
    me.classList.add('hidden')
    ssallat.classList.add('hidden');
    sbuk.classList.add('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.add('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.add('hidden')

});


function menu (){
    if (smenu.clientWidth < 600){
        tmenu.classList.add('hidden');
        me.classList.remove('hidden');
    }
}


if (smenu.clientWidth < 600){
    ssallat.classList.add('hidden');
}

sallat.addEventListener('click',function(){
    ssallat.classList.remove('hidden');
    sbuk.classList.add('hidden');
    ssushi.classList.add('hidden');
    srisoto.classList.add('hidden');
    spasta.classList.add('hidden');
    spatate.classList.add('hidden');
    sspecial.classList.add('hidden');
    ok.textContent='SALLATA';
    menu();

});

buk.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.remove('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.add('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.add('hidden')
    ok.textContent='BRUSCHETTE ';
    menu();

});

sushi.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.add('hidden')
    ssushi.classList.remove('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.add('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.add('hidden')
    ok.textContent='SUSHI';

    menu();
});

risoto.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.add('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.remove('hidden')
    spasta.classList.add('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.add('hidden')
    ok.textContent='RISOTTI';

    menu();
});

pasta.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.add('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.remove('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.add('hidden')
    ok.textContent='PASTA';

    menu();
});

patate.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.add('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.add('hidden')
    spatate.classList.remove('hidden')
    sspecial.classList.add('hidden')
    ok.textContent='GNOCCHI DI PATATE';

    menu();
});

special.addEventListener('click',function(){
    ssallat.classList.add('hidden')
    sbuk.classList.add('hidden')
    ssushi.classList.add('hidden')
    srisoto.classList.add('hidden')
    spasta.classList.add('hidden')
    spatate.classList.add('hidden')
    sspecial.classList.remove('hidden')
    ok.textContent='MENU SPECIALE';

    menu();
});


gsap.registerPlugin(ScrollTrigger);

function init(){
    gsap.to("#cercle1", {
    
        opacity:0,
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
        }
        })
}



function color(){
    gsap.to("#cercle2", {
    
        backgroundColor: "yellow",
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}

function droite(){
    gsap.to("#cercle3", {
    
        x: 1000,
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}

function gauche(){
    gsap.to("#cercle4", {
    
        x: -2000,
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}


function haut(){
    gsap.to("#cercle5", {
    
        y: -2000,
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}


function bas(){
    gsap.to("#cercle6", {
    
        y: 2000,
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}


function Rdroite(){
    gsap.to("#cercle8", {
    
        transform: 'rotateY(180deg)',
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}



function Rgauche(){
    gsap.to("#cercle7", {
    
        transform: 'rotateX(180deg)',
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}

function agrandir(){
    gsap.to("#cercle9", {
    
        transform: 'scale(2)',
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}

function retrecir(){
    gsap.to("#cercle10", {
    
        transform: 'scale(0)',
        scrollTrigger: {
            trigger: '#container',
            start:'top top',
            end:'bottom top',
            scrub: true
            
        }
        })
}


var cercle = document.getElementsByClassName('cercle');
var fade = document.getElementById('fadeIn');
    
fade.addEventListener("click", function() {
    setTimeout(init(),100);
    
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle1").classList.add("active");
});


var bcolor = document.getElementById('color');

bcolor.addEventListener("click", function() {
    
    console.log('oui');
    color();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle2").classList.add("active");
});


var bdroite = document.getElementById('droite');

bdroite.addEventListener("click", function() {
    
    console.log('oui');
       
        droite();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle3").classList.add("active");
});

var bgauche = document.getElementById('gauche');

bgauche.addEventListener("click", function() {
    
    console.log('oui');
  
        gauche();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle4").classList.add("active");
});

var bhaut = document.getElementById('haut');

bhaut.addEventListener("click", function() {
    
    console.log('oui');
       
        haut();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle5").classList.add("active");
});


var bbas = document.getElementById('bas');

bbas.addEventListener("click", function() {
    
    console.log('oui');
  
        bas();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle6").classList.add("active");
});

var bRgauche = document.getElementById('Rgauche');
    
bRgauche.addEventListener("click", function() {

    console.log('oui');
    Rgauche();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle7").classList.add("active");
});

var bRdroite = document.getElementById('Rdroite');
    
bRdroite.addEventListener("click", function() {
    
    console.log('oui');
    Rdroite();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle8").classList.add("active");
});


var bagrandir = document.getElementById('agrandir');
    
bagrandir.addEventListener("click", function() 
{  
    console.log('oui');
    agrandir();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle9").classList.add("active");
});

var bretrecir = document.getElementById('retrecir');
    
bretrecir.addEventListener("click", function() 
{  
    console.log('oui');
    retrecir();
    for (var i = 0; i < cercle.length; i++) {
        if (cercle[i].classList.contains('cercle')){
            cercle[i].classList.remove("active");
        }
    }
    document.getElementById("cercle10").classList.add("active");
});
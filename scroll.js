const titleProgram = document.getElementById("title-program");
const aboutText = document.getElementById("about-text");
const aboutImg = document.getElementById("about-img");
const consultationTarjetMobile = document.getElementById("consultation-tarjet-mobile");
const consultationTarjet = document.getElementById("consultation-tarjet");
const titleMembresia = document.getElementById("title-membresia");
const contentMembresia = document.getElementById("content-membresia");
const footerContent = document.getElementById("footer-content");


const accion = ( elementos, observador) =>{
    
        elementos.forEach((elemento) =>{
           if(elemento.isIntersecting){
               elemento.target.classList.add("anime");
           } 
        });
            
    }

const observador = new IntersectionObserver(accion, {
   root:null,
   rootMargin: '0px',
   threshold: 0.5
});

observador.observe(titleProgram);
observador.observe(aboutText);
observador.observe(aboutImg);
observador.observe(consultationTarjetMobile);
observador.observe(consultationTarjet);
observador.observe(titleMembresia);
observador.observe(contentMembresia);
observador.observe(footerContent);

const titleProgram = document.getElementById("title-program");
const aboutText = document.getElementById("about-text");
const aboutImg = document.getElementById("about-img");
const consultationTarjetMobile = document.getElementById("consultation-tarjet-mobile");
const consultationTarjet = document.getElementById("consultation-tarjet");
const titleMembresia = document.getElementById("title-membresia");
const one = document.getElementById("one");
const two = document.getElementById("two");
const theree = document.getElementById("theree");
const titleFooterDesk = document.getElementById("title-footer-desk");
const contactUsanDesk = document.getElementById("contact-usan-desk");
const footerAllItem = document.getElementById("footer-all-item");
const logoTitle = document.getElementById("logo-title");
const contactUsan = document.getElementById("contact-usan");
const aboutUsFooter = document.getElementById("about-us-footer");
const programFooter = document.getElementById("program-footer");
const readyFooter = document.getElementById("ready-footer");
const copyRight = document.getElementById("copy-right");

function cargarPagina(){
    console.log("welcome")
}

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
observador.observe(one);
observador.observe(two);
observador.observe(theree);
observador.observe(titleFooterDesk);
observador.observe(contactUsanDesk);
observador.observe(footerAllItem);
observador.observe(logoTitle);
observador.observe(contactUsan);
observador.observe(aboutUsFooter);
observador.observe(programFooter);
observador.observe(readyFooter);
observador.observe(copyRight);

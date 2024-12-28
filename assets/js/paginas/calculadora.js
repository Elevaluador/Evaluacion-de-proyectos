function cargarCalculadora() {
    let mercadoPotencial = 0;
    let mercadoDisponible = 0;
    let mercadoEfectivo = 0;
   


    
        let botonMercadoPotencial = document.getElementById('boton-mercado-potencial');
        botonMercadoPotencial.addEventListener('click', calcularMercadoPotencial);
        let botonMercadoDisponible=document.getElementById('boton-mercado-disponible');
        botonMercadoDisponible.addEventListener('click',calcularMercadoDisponible);
        let botonMercadoEfectivo=document.getElementById('boton-mercado-efectivo');
        botonMercadoEfectivo.addEventListener('click', calcularMercadoEfectivo);
        let botonMercadoObjetivo=document.getElementById('boton-mercado-objetivo');
        botonMercadoObjetivo.addEventListener('click',calcularMercadoObjetivo)


    function calcularMercadoPotencial() {

        const poblacion = parseFloat(document.getElementById('lugar').value);
        const sexo = parseFloat(document.getElementById('sexo').value) / 100;
        const edad = parseFloat(document.getElementById('edad').value) / 100;
        const nse = parseFloat(document.getElementById('nse').value) / 100;

        mercadoPotencial = Math.round(poblacion * sexo * edad * nse);
        document.getElementById('resultadoMercadoPotencial').innerHTML =
            `Mercado Potencial: ${mercadoPotencial.toLocaleString()} personas`;
    }
   
    function calcularMercadoDisponible(){
        if (mercadoPotencial===0){
            alert("por favor calcule primero el mercado potencial");
           return;
        }
        
        const consumidores=parseFloat(document.getElementById('consumidores').value)/100;
        mercadoDisponible=Math.round(mercadoPotencial* consumidores);
        document.getElementById('resultadoMercadoDisponible').innerHTML=
        `Mercado Disponible: ${mercadoDisponible.toLocaleString()} personas`;
    }
    
    function calcularMercadoEfectivo(){
        if (mercadoDisponible===0){
            alert("por favor calcule primero el mercado Disponible");
           return;
        }
        
        const interesados=parseFloat(document.getElementById('interesados-comprar-producto').value)/100;
        mercadoEfectivo=Math.round(mercadoDisponible* interesados);
        document.getElementById('resultadoMercadoEfectivo').innerHTML=
        `Mercado Efectivo: ${mercadoEfectivo.toLocaleString()} personas`;
    }

    function calcularMercadoObjetivo(){
        if (mercadoEfectivo===0){
            alert("por favor calcule primero el mercado Efectivo");
           return;
        }
        
        const cuotaMercado=parseFloat(document.getElementById('clientes-potenciales').value)/100;
        const mercadoObjetivo=Math.round(mercadoEfectivo* cuotaMercado);
        document.getElementById('resultadoMercadoObjetivo').innerHTML=
        `Mercado Objetivo: ${mercadoObjetivo.toLocaleString()} personas`;
    }
}


window.addEventListener("load",cargarCalculadora);


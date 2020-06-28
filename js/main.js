/* CONSTANTES ELEMENTO */
const fondoPink = document.querySelector('div.fond-pink');
const fondoBlue = document.querySelector('div.fond-blue');
const Caja1 = document.querySelector('div.caja1');
const SelectF = document.querySelector('div.select-i');
const labelText = document.getElementsByClassName('texto');
const Formulario = document.getElementById('Form');
const Email = document.getElementById('email');
const ErrorT = document.querySelector('div.error');
const Registrado = document.querySelector('div.registrado');
const Boton = document.querySelector('input.boton');
let acu = 0;

let transfr = Array.from(labelText);

/* EVENTO CHECKED BOX */
const checkOf = document.getElementById('check');

checkOf.addEventListener('click', function() {

    fondoPink.style.display = 'none';
    fondoBlue.style.display = 'block';
    Caja1.style.backgroundColor = 'rgb(92, 187, 250)';
    SelectF.style.backgroundColor = 'rgb(92, 187, 250)';
    Boton.style.backgroundColor = 'rgb(92, 187, 250)';

    transfr.forEach(elemento => {
        elemento.style.color = 'rgb(92, 187, 250)';
    })

    acu++;
    if (acu == 2) {
        fondoPink.style.display = 'block';
        fondoBlue.style.display = 'none';
        Caja1.style.backgroundColor = 'rgb(248, 125, 146)';
        SelectF.style.backgroundColor = 'rgb(248, 125, 146)';
        Boton.style.backgroundColor = 'rgb(248, 125, 146)';

        transfr.forEach(elemento2 => {
            elemento2.style.color = 'rgb(248, 125, 146)';
        })

        acu = 0;
    }
});

/* VALIDACION FORMULARIO */

Formulario.addEventListener('submit', function(e) {
    let verificar = Email.value.replace(/.*@/,"").split(".")[0];
    let Nombre = document.querySelector('input#nombre').value;
    let dominios=["hotmail","gmail","outlook"];

    if (dominios.includes(verificar)) {

        /* OPCIONAL ALERT// AQUI VA URL DEL SITIO WEB DIRIGIDO*/
        alert(`Bienvenido ${Nombre}`);

    } else {
        ErrorT.style.display = 'block';
        e.preventDefault();
    }
})

const miBoton = document.getElementById('miBoton');
function handleClick(){
    alert('Hola has hecho click en el boton!');
}
miBoton.addEventListener("click",handleClick);

function showAlert() {
    alert('¡Hola esta es una alerta desde JavaScript!');
}
let boton = document.getElementById("miBoton");
boton.addEventListener("click",function(){
    alert("¡Haz hecho click en el boton!");
})

const form = document.getElementById('myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();
    validateForm();
});

function validateEmail(email){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)){
        alert('Por favor ingrese un correo electronico valido.');
    }
    else
    {
        alert('Correo electronico enviado correctamente');
    }
    }

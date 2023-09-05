function postData() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fnac = document.getElementById('fecha-nacimiento').value;

    const objetoData = {
        nombre: nombre,
        apellido: apellido,
        fecha: fnac,
    };


    fetch("https://jsonplaceholder.typicode.com/users", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoData)
    })
        .then(respones => respones.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Datos enviados exitosamente');
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Error al enviar los datos');
        });
}

console.log();
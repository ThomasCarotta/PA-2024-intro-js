//Function Declaration

function saludar(nombre){
    console.log(`Bienvenido   ${nombre}`)
}

saludar('Juan')

//Function Expression

const cliente= function(nombreCliente){
    console.log('Mosgtrando los datos del cliente: '+ nombreCliente)
}

cliente('Juan')

function actividad(nombre, actividad){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)


}
actividad('Juan','Aprendiendo JavaScript')
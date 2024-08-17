//resolve +> ejecuta el llamado a la promise cuado el llamado es correcto
//reject cuando huvo un error

const aplicarDescuento = new Promise((resolve, reject)=>{
    setTimeout( ()=>{
        let descuento = false
        if(descuento){
            resolve('Descuento Aplicado')
        } else {
            reject('No se pudo aplicar el descuento')
        }
    },3000)

})
aplicarDescuento.then(resultado=>{
    console.log(aplicarDescuento)

}).catch(error=>{
    console.log('Hubo un error en el descuento', error)
})

//aplicamos el metodo .then a la promise que es lo que pasamos como funcion
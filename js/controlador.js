function guardar(){
    if(document.getElementById('usuario').value==''){
        document.getElementById('usuario').classList.add('estilo')
    }

    if(document.getElementById('contraseña').value==''){
        document.getElementById('contraseña').classList.add('estilo')
    }

    
    console.log('Contraseña:',document.getElementById('contraseña').value='Perra marrana')
}


function validar(){

    let ubicacion, baños, estado, direccion, codigoPostal;
    ubicacion=document.getElementById("Ubicacion").value;
    baños=document.getElementById("Baños").value;
    estado=document.getElementById("Estado").value;
    direccion=document.getElementById("Direccion").value;
    codigoPostal=document.getElementById("CodigoPostal").value;

    if(validarUbicacion(ubicacion)==0){
        return false;
    }
    else{
        return true;
    }

}


function validarUbicacion(ubicacion){
    if(ubicacioon==''){
        alert('No ingreso una Ubicacion');
        return 0;
    }
    else{
        return 1;
    }
}


function ocultar(){
    document.getElementById("masDormitorio").style.display="none";
    document.getElementById("masBanios").style.display="none";
}


function validarDormitorio(){
    dormitorio=document.getElementById("Dormitorio").value;
   if(dormitorio==="-1"){
       document.getElementById("masDormitorio").style.display="block";
   }
   else{
       document.getElementById("masDormitorio").style.display="none";
   }
}

function validarBanio(){
    banios=document.getElementById("Banios").value;
   if(banios==="-1"){
       document.getElementById("masBanios").style.display="block";
   }
   else{
       document.getElementById("masBanios").style.display="none";
   }
}


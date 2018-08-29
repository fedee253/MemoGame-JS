
var elementosencontrados = 0;
var bloque_girado = 0;
var carta_anterior

function Carta(a,b) {
    if(document.getElementById(90).innerHTML==0){
        alert("USTED HA PERDIDO");

    }
    else if (elementosencontrados==8){
        alert("GANASTE CAPO CAMPEON IGUAL FUE PURA SUERTE SEGURO");
    }
    else {
        if(document.getElementById(b).style.opacity == 0){

            if(bloque_girado == 0){
                bloque_girado = 1
                CambiarOpacidad(a,b)
                carta_anterior = a
            }
            else{
                if(VerificarIgualdad(a,carta_anterior) == 0){
                    bloque_girado=0
                    CambiarOpacidad(a,b)
                    setTimeout(function(){ CambiarOpacidad(a+100,a); CambiarOpacidad(carta_anterior+100,carta_anterior)},500)
                    document.getElementById(90).innerHTML = document.getElementById(90).innerHTML - 1
                }
                else {
                    elementosencontrados++
                    CambiarOpacidad(a,b)
                    bloque_girado=0
                }
            }
        }

    }
}

function CambiarOpacidad(a,b){
    document.getElementById(b).style.opacity = "1"
    document.getElementById(a).style.opacity = "0"
}

function Reset(){
    for(i=1;i<18;i++){
        if(i!=7){
            
    document.getElementById(i).style.opacity = "1"
    document.getElementById(i+100).style.opacity = "0"
        }
    }
    elementosencontrados = 0
    document.getElementById(90).innerHTML = 10
}

function VerificarIgualdad(a,b){
    switch(a){
        case 1:
            if(b==9)
                return 1
            else
                return 0
            break
        case 2:
            if(b==12)
                return 1
            else
                return 0
            break
        case 3:
            if(b==15)
                return 1
            else
                return 0
            break
        case 4:
            if(b==11)
                return 1
            else
                return 0
            break
            case 5:
            if(b==16)
                return 1
            else
                return 0
            break
            case 6:
            if(b==10)
                return 1
            else
                return 0
            break
            case 8:
            if(b==14)
                return 1
            else
                return 0
            break
            case 9:
            if(b==1)
                return 1
            else
                return 0
            break
            case 10:
            if(b==6)
                return 1
            else
                return 0
            break
            case 11:
            if(b==4)
                return 1
            else
                return 0
            break
            case 12:
            if(b==2)
                return 1
            else
                return 0
            break
            case 13:
            if(b==17)
                return 1
            else
                return 0
            break
            case 14:
            if(b==8)
                return 1
            else
                return 0
            break
            case 15:
            if(b==3)
                return 1
            else
                return 0
            break
            case 16:
            if(b==5)
                return 1
            else
                return 0
            break
            case 17:
            if(b==13)
                return 1
            else
                return 0
            break
         
                
                
    }
    
}
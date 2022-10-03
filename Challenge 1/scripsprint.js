const textoEntrada = document.querySelector(".inputTexto");
const copiable = document.querySelector(".mensaje");

/* Conversión de vocales:
 "e"  convertida  "enter"
 "i"  convertida  "imes"
 "a"  convertida  "ai"
 "o"  convertida  "ober"
 "u"  convertida  "ufat" */

function btnEncriptar() {
    const TextoEncriptado = encriptar(textoEntrada.value);
    copiable.value = TextoEncriptado;
    textoEntrada.value = "";

    if (copiable.value === ''){
        return false;  
    }
    else{
                          //Para desaparecer la imagen de fondo, el h2, cambiar tamaño de textarea-mensaje y posición de footer.
        copiable.style.backgroundImage = "none";
        document.getElementById('nada').style.display = 'none';
        if (window.innerWidth < 360){
            document.getElementById("mensa").className = "mensaje3";
            document.getElementById("patita1").className = "patita3";
        } 
        else {
            if (window.innerWidth < 1100) {
                document.getElementById("mensa").className = "mensaje2";
                document.getElementById("patita1").className = "patita2";
            }
            else {
                document.getElementById("mensa").className = "mensaje";
                document.getElementById("patita1").className = "patita";
            }
        }
    } 
                           //Para aparecer el botón de copiar
        var x = document.getElementById('myDiv');
        if (x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'block'
        }    
 }

function encriptar(stringEncriptada){
    var matrizReglas = [["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizReglas.length; i++){

        if (stringEncriptada.includes(matrizReglas[i][0])){

            stringEncriptada= stringEncriptada.replaceAll((matrizReglas[i][0]),(matrizReglas[i][1]));
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const TextoDesencriptado = desencriptar(textoEntrada.value);
    copiable.value = TextoDesencriptado;
    textoEntrada.value = "";

    if (copiable.value === ''){
        return false;
    }
    else{
        //Para desaparecer la imagen de fondo, el h2, cambiar tamaño de textarea-mensaje y posición de footer.
        copiable.style.backgroundImage = "none";
        document.getElementById('nada').style.display = 'none';
        if (window.innerWidth < 360){
            document.getElementById("mensa").className = "mensaje3";
            document.getElementById("patita1").className = "patita3";
        } 
        else {
            if (window.innerWidth < 1100) {
                document.getElementById("mensa").className = "mensaje2";
                document.getElementById("patita1").className = "patita2";
            }
            else {
                document.getElementById("mensa").className = "mensaje";
                document.getElementById("patita1").className = "patita";
            }
        }
    } 

        //Para apareecer el botón de copiar
        var x = document.getElementById('myDiv');
        if (x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'block'
        }
}

function desencriptar(stringDesencriptada){
    var matrizReglas = [["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizReglas.length; i++){

        if (stringDesencriptada.includes(matrizReglas[i][0])){

            stringDesencriptada= stringDesencriptada.replaceAll((matrizReglas[i][1]),(matrizReglas[i][0]));
        }
    }
    return stringDesencriptada;

}

function copion (){
    copiable.select()
    navigator.clipboard.writeText(copiable.value)
    copiable.value = "";
    alert("Texto Copiado");
    copiable.style.backgroundImage = "url(imag/Muñeco.png)";
    document.getElementById('myDiv').style.display = 'none';
    document.getElementById('nada').style.display = 'block';
    document.getElementById("mensa").className = "mensaje";
    document.getElementById("patita1").className = "patita";
}

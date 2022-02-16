// ---------------------------- DECLARACIÓN DE VARIABLES ----------------------------

let presentacion;
let moneda = true;
let verificación;
let preguntados = true;
let pregunta1;
let pregunta2;
let pregunta3;
let pregunta4;

const cara = 1;
const cruz = 2;

// ---------------------------- DESICION ----------------------------

// AQUÍ EL USUARIO DEBERÁ DECIDIR SI JUGAR O NO JUGAR.
presentacion = prompt("¿Quieres jugar a un juego? 'si / no'")
if (presentacion==="si"){
    // SI LA RESPUESTA ES SI, EL USUARIO DEBERÁ DECIDIR QUÉ JUEGO JUGAR.
    alert("Escoge uno de estos juegos");
    //SI SE DECIDE POR "moneda" JUGARÁ CARA O CRUZ.
    //SI SE DECIDE POR "preguntados" JUGARÁ AL PREGUNTADOS.
    eleccion = prompt("Moneda / Preguntados");
} else if (presentacion==="no"){
    //SI LA RESPUESTA FUE NO, EL SITIO LE DIRÁ LO SIGUIENTE...
    alert("De acuerdo. ¡Nos vemos pronto! <3")
}

// ----------------------------   JUEGOS    ---------------------------
// ---------------------------- CARA O CRUZ ---------------------------- 

//EN ESTE JUEGO, DEBERÁ DE PENSAR QUE HACER SI TOCA CARA Y QUE HACER SI TOCA CRUZ.
if (eleccion==="moneda"){
    let listo;
    do{
        listo !== "listo"
        listo = prompt('escribe "listo" cuando esté decidido que es cara y que es cruz.')
    }while(listo !== "listo")
    moneda = cara + cruz;
    moneda = Math.floor(Math.random()*2)
    if (moneda===0){
        document.write("¡¡¡¡¡¡¡¡ SALIÓ CARA !!!!!!!!")
        document.write('<img src="../img/cara.png" width="300px" height="300px"/>')
    }
    else {
        document.write("¡¡¡¡¡¡¡¡ SALIÓ CRUZ !!!!!!!!")
        document.write('<img src="../img/cruz.png" width="300px" height="300px"/>')
    }
} 

//---------------------------- PREGUNTADOS ----------------------------

//EN ESTE JUEGO DEBERÁ RESPONDER LAS PREGUNTAS QUE SE LE PRESENTAN CORRECTAMENTE PARA GANAR. DE LO CONTRARIO SI RESPONDE UNA O MAS RESPUESTAS INCORRECTAS, DEBERÁ REINICIAR EL JUEGO "F5".
else if (eleccion === "preguntados"){
    alert("Las respuestas deberás escribirlas sin mayusculas ni caracteres raros. Dicho esto... ¡Que comiencen las preguntas!")

    function preg1 (){
        alert("¿Cuál de estos paises clasificó al mundial QATAR2022?");
        pregunta1 = prompt("Bolivia, Chile, Argentina, Paraguay, Venezuela").toLowerCase();
        alert(`Respondiste ${pregunta1}`);
    }

    function preg2 (){
        alert("¿En el año de 2021, un equipo de ESports de CS:GO salió campeón de el más importante torneo de la historia de CS:GO. ¿Cuáles de los siguientes equipos fué?");
        pregunta2 = prompt("Gambit, NaVi, Vitality, NIP, Heroic").toLowerCase();
        alert(`Respondiste ${pregunta2}`);
    }

    function preg3 (){
        alert("¿En qué año el SARS-COV-2 arrazó con la población mundial del planeta tierra?");
        pregunta3 = Number(prompt("2017, 2018, 2019, 2020, 2021"));
        alert(`Respondiste ${pregunta3}`);
    }

    function preg4 (){
        alert("¿Qué apodo te ponen en un videojuego si no sabes jugarlo?");
        pregunta4 = prompt("Noob, Novato, maleta, carreado, incarreable").toLowerCase();
        alert(`Respondiste ${pregunta4}`);
    }
    
    preg1();
    preg2();
    preg3();
    preg4();
    //---------------------------- VERIFICACIÓN DE PREGUNTADOS ----------------------------
    //AQUÍ ESTÁ LA VERIFICACIÓN DE EL USUARIO AL TERMINAR LAS PREGUNTAS.
    verificación = `${pregunta1} ${pregunta2} ${pregunta3} ${pregunta4}`;
    if (verificación === "argentina navi 2019 noob"){
        //SI TODOS ESTÁ RESPONDIDO CORRECTAMENTE VA A PASAR ESTO...
        alert("¡FELICITACIONES! ¡RESPONDISTE TODAS LAS PREGUNTAS CORRECTAMENTE!. Aquí está tu premio.")
        document.write('<img src="../img/ganador.jpg" width="300px" height="300px"/>')
    }else {
        //SI UNA O MAS RESPUESTAS ESTÁN MAL, VA A PASAR ESTO...
        alert("Una de tus respuestas o más de una, está mal. Por lo tanto, perdiste el juego")
    }

    //---------------------------- ARRAY APLICADO ----------------------------
    //Incorporé arrays para las respuestas de el usuario
    const array = [pregunta1, pregunta2, pregunta3, pregunta4];
    console.log(array[0]);//verifico si el array está bien.
    console.log(array[1]);//verifico si el array está bien.
    console.log(array[2]);//verifico si el array está bien.
    console.log(array[3]);//verifico si el array está bien.
    
    //Apliqué un "for" para mostrar con un "document.write" las respuestas del usuario una x una
    for(let i = 0; i<array.length; i+=1){
        document.write("tu respuesta fue" + " " + array[i] + "<br>")
    }

    const rp1 = [pregunta1];
    const rp2 = [pregunta2];
    const rp3 = [pregunta3];
    const rp4 = [pregunta4];

    const rps = [rp1, rp2, rp3, rp4];
    console.log(rps);
} 




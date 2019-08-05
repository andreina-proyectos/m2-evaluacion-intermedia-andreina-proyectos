# m2-evaluacion-intermedia-andreina-proyectos
Ejercicio de evaluación intermedia del módulo 2 de Adalab ❣️. Antes de empezar, hice el siguiente esquema del plan a ejecutar:

¿Qué quiero hacer?
1.Debo recoger del html las constantes y variables con las que voy a trabajar. En este caso recojo:
    -el contador porque interacciona con mi juego
    -el input value porque va a ser el numero que meta el usuario
    -button (btn), que va a tener un event listener porque activa todo el juego, estara vigilado todo el tiempo
    -el p llamado feedback, porque ahi cambian cosas

2.Cuando el usuario entra, lo primero que se ejecuta es una funcion que genera un numero random (winnerNumber)

3- Tengo que coger ese numero random y meterlo en un contenedor, como una variable, y eso lo voy a comparar con el que introduzca el usuario (userNumber). Habria que poner un if?

5- al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola. Es decir, que hago input.innerHTML = HAGO VARIABLE PARA COMPROBAR

4- if numeroDeUsuario === numeroRandom ---> entonces usuario gana, y meteria un texto (feedback.innerHTML=`has ganado`)

5- if numeroDeUsuario > numeroRandom --->intenta con numero mas bajo

6-if numeroDeUsuario < numeroRandom --->intenta con numero mas alto

7- meter numero de intentos dentro de contador --> contador.innerHTML 

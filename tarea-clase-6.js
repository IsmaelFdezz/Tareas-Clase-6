/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes")
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)

    borrarIntegrantesAnteriores()
    crearIntegrantes(cantidadIntegrantes)

    event.preventDefault(); 
}

document.querySelector("#calcular").onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes()
    mostrarEdad("mayor", obtenerMayorNumero(numeros))
    mostrarEdad("menor", obtenerMenorNumero(numeros))
    mostrarEdad("promedio", obtenerPromedio(numeros))
    mostrarResultados()

    event.preventDefault();
}

document.querySelector("#reiniciar").onclick = resetear

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll(".integrante") 
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove()
    }
}

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo()
    } else {
        resetear()
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i)
    }
}

function crearIntegrante (indice) {
    const $div = document.createElement("div")
    $div.className = "integrante"

    const $label = document.createElement("label")
    $label.textContent = "Edad del integrante # " + (indice + 1)

    const $input = document.createElement("input") 
    $input.type = "number"
    $input.className = "inputIntegrantes"

    $div.appendChild($label)
    $div.appendChild($input)

    const $integrantes = document.querySelector("#integrantes")
    $integrantes.appendChild($div)
}

function resetear() {
    borrarIntegrantesAnteriores()
    ocultarBotonCalculo()
    ocultarResultados()
}

function ocultarBotonCalculo() {
    document.querySelector("#calcular").className = "oculto"
}

function mostrarBotonCalculo() {
    document.querySelector("#calcular").className = " "
}

function ocultarResultados() {
    document.querySelector("#analisis").className = "oculto"
}

function mostrarResultados() {
    document.querySelector("#analisis").className = " "
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor
}

function obtenerEdadesIntegrantes () {
    const $integrantes = document.querySelectorAll(".inputIntegrantes")
    const edades = []
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value))
    }
    return edades
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#boton-agregar").onclick = function(event) {
    agregarCampo()
    mostrarBotonCalcularSalarios()

    event.preventDefault()
}

document.querySelector("#boton-quitar").onclick = function(event) {
    quitarCampo()

    event.preventDefault()
}

document.querySelector("#calcular-salarios").onclick = function(event) {
    const numeros = obtenerSalarios()
    mostrarSalarios("mayor", obtenerMayorNumero(numeros))
    mostrarSalarios("menor", obtenerMenorNumero(numeros))
    mostrarSalarios("promedioAnual", obtenerPromedio(numeros))
    mostrarSalarios("promedioMensual", obtenerPromedioMensual(numeros))
    mostrarResultadosSalarios()

    event.preventDefault()
}


function agregarCampo() {
    const $divSalario = document.createElement("div")
    $divSalario.className = "salario"

    const $labelSalario = document.createElement("label")
    $labelSalario.textContent = "Ingresa el salario anual"

    const $inputSalario = document.createElement("input")
    $inputSalario.type = "number"
    $inputSalario.className = "inputSalarios"

    $divSalario.appendChild($labelSalario)
    $divSalario.appendChild($inputSalario)

    const $divSalarios = document.querySelector("#salarios")
    $divSalarios.appendChild($divSalario)
}

function quitarCampo() {
    const $divSalario = document.querySelector(".salario").remove()
}

function mostrarBotonCalcularSalarios() {
    document.querySelector("#calcular-salarios").className = " "
}

function mostrarResultadosSalarios() {
    document.querySelector("#analisis-salarios").className = " "
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor
}

function obtenerSalarios() {
    const $salarios = document.querySelectorAll(".inputSalarios")
    const arraySalarios = []

    for(let i = 0; i < $salarios.length; i++) {
        if($salarios[i].value !== "") {
            arraySalarios.push(Number($salarios[i].value))
        }
    }
    return arraySalarios
}


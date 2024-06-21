const validarMayuscula =(texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}

const VALIDACIONES = {
    username:{
        validacion: (texto)=> texto.length >=4 && validarMayuscula(texto),
        errorText: 'It must be at least 4 characters and an uppercase'
    } ,
    password:{
        validacion: (texto)=> texto.length >=6 && validarMayuscula(texto),
        errorText: 'It must be at least 6 characters and an uppercase'
    }
}

const obtenerValoresFormulario = (formulario)=>{
    const inputs = ['username', 'password']
    const inputsInfo = {}
    for(let input of inputs){
        const spanErrorHTML = formulario.querySelector('.error-text-'+ input)
        const valor = formulario[input].value
        inputsInfo[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        }
    }
    return inputsInfo
}

const formularioHTML = document.getElementById('formulario')

const handleSubmit = (evento)=>{
    evento.preventDefault()
    const formulario = evento.target
    const valoresFormulario = obtenerValoresFormulario(formulario)
    console.log(valoresFormulario);
    for(const propiedad in valoresFormulario){
        const objetoInputFormulario = valoresFormulario[propiedad]
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
        }
        else{
            objetoInputFormulario.errorHTML.innerText = ''
        }
    }
}

formularioHTML.addEventListener('submit', handleSubmit)


const validarUsername = (texto)=> texto.lenth >=4 && texto != texto.toLowerCase()
const validarPassword = (texto)=> texto.lenth >=6 && texto != texto.toLowerCase() && texto.incluedes('#')

const formularioHTML = document.getElementById('formulario')

const handleSubmit = (evento)=>{
    evento.preventDefault()
    const formulario = evento.target
    const username = formulario.username.value
    const password = formulario.password.value
    
    let valido = true

    if(!validarUsername(username)){
        const errorTextHTML = document.querySelector('.error-text-username')
        errorTextHTML.innerText = 'El username tiene que tener al menos 4 caracteres y al menos una mayuscula'
    }
    if(!validarPassword(password)){
        const errorTextHTML = document.querySelector('.error-text-password')
        errorTextHTML.innerText = 'El password debe contener al menos 6 caracteres, una mayuscula e incluir (#)'
    }
}

formularioHTML.addEventListener('submit', handleSubmit)


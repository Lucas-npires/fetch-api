// funcao que valida o cep

const cep = document.querySelector("#cep")

cep.addEventListener('keypress', () => {
    let ceplength = cep.value.length

    if (ceplength === 5) {
        cep.value += '-'
    }
})
const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]

        }
    }
}
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        ache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => ('Cep não encontrado: ' + e, message))
})

// funcao que valida cpf

const cpf = document.querySelector("#cpf")

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

        if (cpflength === 3 || cpflength === 7) {
        cpf.value += '.'
    }   else if (cpflength === 11) {
        cpf.value += '-'
    }
})
// const telefone = document.querySelector("#telefone")

// telefone.addEventListener('keypress', () => {
//     let telefonelength = telefone.value.length

//         if (telefonelength === ) {
//             telefone.value += '()'
//         }
// })

// funcao que valida o botao submit


// validacao do required

// const fields = document.querySelectorAll("[required]")
// // console.log(fields)

// function customValidation(event) {
//     const field = event.target
    
//     // funcao que customiza msg
//     field.setCustomValidity("Esse campo é obrigatório")
// }

// for( field of fields ){
//     field.addEventListener("invalid", customValidation)
// }

document.querySelector("form")
.addEventListener("submit", event => {
    console.log("Enviar")
    
    event.preventDefault()

})
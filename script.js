
// Mensagem de erro caso a quandidade de pessoas seja invalida
const error = document.querySelector(".error-message")
const people = document.querySelector("#people");
people.addEventListener("input", () => {    
    people.value < 1 ? error.style.display = "block" : error.style.display = "none" 
    people.value < 1 ? people.style.outline = "2px solid rgb(223, 87, 87)" : people.style.outline = "2px solid var(--Strong-cyan)"
})

const valor = document.querySelector("#bill")
let tipPerc;
let tipCustom = document.querySelector("#custom");
let tipAmount = document.querySelector("#tip-amount")
let totalAmount = document.querySelector("#total-amount")
finalResult = () => {
    tipPerc = document.querySelector(".selecionado");
    tipPerc.value ? tipPerc = tipPerc.value : tipPerc = tipPerc.outerText.slice(0, -1);
    if (people.value > 0) {
        tipAmount.innerHTML = "$" + (((+tipPerc * +valor.value) / 100) / +people.value).toFixed(2);
        totalAmount.innerHTML = "$" + ((+valor.value + +tipAmount.outerText.slice(1)) / +people.value).toFixed(2);
    }
}

// Logica para mudança de estilização dos botões quando clicar
const porcentagens = document.querySelectorAll(".botao-porcentagem");
for (let i = 0; i < porcentagens.length; i++) {
    porcentagens[i].addEventListener("click", () => {
        for (let n = 0; n < porcentagens.length; n++) {
            porcentagens[n] == porcentagens[i] ? porcentagens[i].classList.add("selecionado") : porcentagens[n].classList.remove("selecionado")
        }
        finalResult()
    })
}

// Chamando a função para quando ouver mudanças nos espaços
valor.addEventListener("input", finalResult)
people.addEventListener("input", finalResult)
tipCustom.addEventListener("input", finalResult)


const reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    valor.value = '';
    people.value = 1;
})




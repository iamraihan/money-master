/* let incomeInput = document.getElementById('income-input')
let foodInput = document.getElementById('food-input')
let rentInput = document.getElementById('rent-input')
let clothInput = document.getElementById('cloth-input')

let culculateButton = document.getElementById('calculate-btn')
let totalExpenses = document.getElementById('total-expense')
let balance = document.getElementById('balance')
let saveInput = document.getElementById('save-input')
let saveAmount = document.getElementById('save-amount')
let remainBalance = document.getElementById('remaining-balance') */



// event listener
document.getElementById('calculate-btn').addEventListener('click', function () {

    let incomeInput = document.getElementById('income-input')

    let foodInput = document.getElementById('food-input')
    let rentInput = document.getElementById('rent-input')
    let clothInput = document.getElementById('cloth-input')
    calculateAmount(foodInput, rentInput, clothInput)

})

function calculateAmount(num1, num2, num3) {
    let balance = document.getElementById('balance')

    let incomeInput = document.getElementById('income-input')
    let totalExpense = document.getElementById('total-expense')
    let expenses = parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value)


    if (isNaN(expenses) || expenses < 0) {
        expenses = ''
        return alert('input a valid number')
    }
    if (incomeInput.value < expenses) {
        return alert('expense cant be more than income')
    }

    totalExpense.innerText = expenses
    balance.innerText = incomeInput.value - expenses
}


document.getElementById('save-button').addEventListener('click', function () {

    // let balance = document.getElementById('balance')

    let saveAmount = document.getElementById('save-amount')
    let incomeInput = document.getElementById('income-input')
    let saveInput = document.getElementById('save-input')
    let remainBalance = document.getElementById('remaining-balance')

    if (isNaN(saveInput.value) || saveInput.value < 0) {
        expenses = ''
        return alert('input a valid number')
    }
    if (saveAmount.innerText > remainBalance.innerText) {
        return alert('cant save more then Remain Balance')
    }

    saveAmount.innerText = incomeInput.value * saveInput.value / 100


    remainBalance.innerText = balance.innerText - saveAmount.innerText



})



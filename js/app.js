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
    let totalExpenses = document.getElementById('total-expense')
    const expenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value)
    totalExpenses.innerText = expenses

    let balance = document.getElementById('balance').innerText = incomeInput.value - totalExpenses.innerText


    document.getElementById('save-button').addEventListener('click', function () {
        let saveInput = document.getElementById('save-input').value
        let saveAmount = document.getElementById('save-amount').innerText = incomeInput.value * saveInput / 100
        document.getElementById('remaining-balance').innerText = balance - saveAmount
    })
})
